const express = require('express');

const ctrl = require('../../controllers/contacts');

const  isValidId  = require('../../middlewares');

const router = express.Router();

router.get('/', ctrl.listContactsCtrl);

router.get('/:contactId', isValidId, ctrl.getContactByIdCtrl);

router.post('/', ctrl.addContactCtrl);

router.delete('/:contactId', isValidId, ctrl.removeContactCtrl);

router.put('/:contactId', isValidId, ctrl.updateContactCtrl);

router.patch('/:contactId/favorite', isValidId, ctrl.updateContactFavoriteCtrl);

module.exports = router;
