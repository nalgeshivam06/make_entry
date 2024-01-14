import { ADD_INVOICE, UPDATE_INVOICE, DELETE_INVOICE } from './actiontype';

export const addInvoice = (invoice) => ({
  type: ADD_INVOICE,
  payload: invoice,
});

export const updateInvoice = (id, updatedData) => ({
  type: UPDATE_INVOICE,
  payload: { id, updatedData },
});

export const deleteInvoice = (id) => ({
  type: DELETE_INVOICE,
  payload: id,
});
