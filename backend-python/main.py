from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import psycopg2, os, requests
from dotenv import load_dotenv

load_dotenv()
app = FastAPI(title="Portfolio AI Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:4000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Models ---
class Message(BaseModel):
    name: str
    email: str
    message: str

class ChatMessage(BaseModel):
    message: str

# --- System prompt about YOU ---
SYSTEM_PROMPT = """You are an AI assistant on a developer portfolio website.
You help potential clients learn about the developer.
Keep answers short, friendly and professional.

About the developer:
- Full stack developer skilled in React, Python, Spring Boot, Node.js
- Available for freelance work
- Specializes in web apps and AI-powered applications
- Contact via the contact form on this site

Only answer questions related to the developer's work and skills.
If asked something unrelated, politely redirect to the developer's services."""

# --- Health ---
@app.get("/health")
def health():
    return {"status": "ok", "service": "python-fastapi"}

# --- Contact form ---
@app.post("/api/contact/send")
def send_message(msg: Message):
    try:
        conn = psycopg2.connect(
            host="localhost", port=5432,
            database="portfolio",
            user="postgres",
            password=os.getenv("DB_PASSWORD")
        )
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO messages (name, email, message) VALUES (%s, %s, %s)",
            (msg.name, msg.email, msg.message)
        )
        conn.commit()
        cur.close()
        conn.close()
        return {"success": True, "message": "Message received!"}
    except Exception as e:
        return {"success": False, "error": str(e)}

# --- AI Chat endpoint ---
@app.post("/api/chat")
def chat(body: ChatMessage):
    try:
        response = requests.post(
            "http://localhost:11434/api/chat",
            json={
                "model": "llama3.2",
                "stream": False,
                "messages": [
                    {"role": "system", "content": SYSTEM_PROMPT},
                    {"role": "user",   "content": body.message}
                ]
            },
            timeout=30
        )
        reply = response.json()["message"]["content"]
        return {"success": True, "reply": reply}
    except Exception as e:
        return {"success": False, "reply": "Sorry, AI is unavailable right now.", "error": str(e)}