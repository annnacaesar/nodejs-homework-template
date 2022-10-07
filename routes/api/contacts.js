const express = require('express');

const ctrl = require('../../controllers/contacts');

const  {isValidId, authenticate}  = require('../../middlewares');

const contactsRouter = express.Router();

contactsRouter.get('/', authenticate, ctrl.listContactsCtrl);

contactsRouter.get('/:contactId', authenticate, isValidId, ctrl.getContactByIdCtrl);

contactsRouter.post('/', authenticate, ctrl.addContactCtrl);

contactsRouter.delete('/:contactId', authenticate, isValidId, ctrl.removeContactCtrl);

contactsRouter.put('/:contactId', authenticate, isValidId, ctrl.updateContactCtrl);

contactsRouter.patch('/:contactId/favorite', authenticate, isValidId, ctrl.updateContactFavoriteCtrl);

module.exports = contactsRouter;
