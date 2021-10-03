import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
}

export async function postContact(contact) {
    return await axios.post('/contacts', {
        name: contact.name,
        number: contact.number
    });
}

export async function deleteContact(contactId) {
    return await axios.delete(`/contacts/${contactId}`);
}

export async function fetchContactById(contactId) {
    const { data } = await axios.get(`/contacts/${contactId}`);
    return data;
}