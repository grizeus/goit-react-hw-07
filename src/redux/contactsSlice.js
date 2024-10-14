import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const selectContacts = state => state.contacts.items;
export const { addContact, deleteContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;
