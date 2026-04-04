import axios from 'axios'
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000',
})

export default api

export const getProjects = () => api.get('/api/projects')
export const getFeaturedProjects = () => api.get('/api/projects/featured')
export const getSkills = () => api.get('/api/skills')

export const sendMessage = (data: {
  name: string
  email: string
  message: string
}) => api.post('/api/contact/send', data)
export const sendChat = (message: string) =>
  api.post('/api/chat', { message })