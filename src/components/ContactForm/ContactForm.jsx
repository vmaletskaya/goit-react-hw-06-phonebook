import { useState } from 'react';
import css from './ContactForm.module.css';
import formatPhoneNumber from './utils';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  //
  const onInputValue = e => {
    if (e.target.name === 'number') {
      setNumber(formatPhoneNumber(e.target.value));
    } else {
      setName(e.target.value);
    }
  };

  const clearingField = e => {
    if (e.key === 'Backspace') {
      setNumber({ number: '' });
    }
  };

  const handlerOnSubmit = e => {
    e.preventDefault();
    if (contacts.find(o => o.name.toLowerCase() === name.toLowerCase())) {
      return alert(`<< ${name} >> is already in contacts`);
    } else {
      dispatch(addContact({ name, number }));
      reset();
    }
  };

  const reset = () => {
    setNumber('');
    setName('');
  };

  return (
    <form
      action=""
      className={css.form}
      onSubmit={handlerOnSubmit}
      autoComplete="off"
    >
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Z\s]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onInputValue}
          onClick={clearingField}
        />
      </label>
      <label>
        Telephone
        <input
          type="tel"
          name="number"
          pattern="^[0-9]+$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onInputValue}
          onKeyDown={clearingField}
        />
      </label>
      <button type="submit" className={css.addContact}>
        Add Contact
      </button>
    </form>
  );
}