from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()
app = FastAPI(title="Portfolio AI Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:4000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    name: str
    email: str
    message: str

@app.get("/health")
def health():
    return {"status": "ok", "service": "python-fastapi"}

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