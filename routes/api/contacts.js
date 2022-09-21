const express = require('express');

const ctrl = require('../../controllers/contacts')

const router = express.Router();

router.get('/', ctrl.listContactsCtrl);

router.get('/:contactId', ctrl.getContactByIdCtrl);

router.post('/', ctrl.addContactCtrl);

router.delete('/:contactId', ctrl.removeContactCtrl);

router.put('/:contactId', ctrl.updateContactCtrl);

module.exports = router;
