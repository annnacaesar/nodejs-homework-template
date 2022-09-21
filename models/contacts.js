
const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, '/contacts.json');

async function listContacts() {
	const data = await fs.readFile(contactsPath, 'utf-8');
	const contacts = JSON.parse(data);
	return contacts;
}

async function getContactById(contactId) {
	const contacts = await listContacts();
	const result = contacts.find(item => item.id === contactId);
	return result || null;
}

async function addContact({name, email, phone}) {
	const contacts = await listContacts();
	const newContact = {
		name,
		email,
		phone,
		id: String(Date.now()),
	};
	contacts.push(newContact);
	await fs.writeFile(contactsPath, JSON.stringify(contacts));
	return newContact;
}

async function removeContact(contactId) {
	const contacts = await listContacts();
	const index = contacts.findIndex(item => item.id === contactId);
	if (index === -1) return null;
	const removedContacts = contacts.splice(index, 1);
	await fs.writeFile(contactsPath, JSON.stringify(contacts));
	return removedContacts;
}

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
	const index = contacts.findIndex(item => item.id === contactId);
	if(index === -1) {
			return null;
	}
	contacts[index] = body;
	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
	return contacts[index];
  
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
