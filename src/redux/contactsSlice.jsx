import shortid from 'shortid';

const { createSlice } = require('@reduxjs/toolkit');

export const contactsSlice = createSlice({
  name: 'Contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare: text => {
        return { payload: { id: shortid(), ...text } };
      },
    },

    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
