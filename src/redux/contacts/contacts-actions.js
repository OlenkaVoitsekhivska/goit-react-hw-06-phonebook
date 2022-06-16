import { createAction } from '@reduxjs/toolkit';


const addContact = createAction('contacts/add');

const deleteContact = createAction('contacts/delete');

const updateFilter = createAction('filter/update');

const actions = {addContact, deleteContact,  updateFilter};
export default actions;