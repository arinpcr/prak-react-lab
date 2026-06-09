import axios from 'axios'

const API_URL = "https://ogzfvpfynqbglohdjxve.supabase.co/rest/v1/"
const API_KEY = "sb_publishable_jLAKpWPynkTM8pVfZEsPfQ_DyygkZof"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    }
}