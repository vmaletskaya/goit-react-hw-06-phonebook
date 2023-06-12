import css from './ContactCard.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';


export default function ContactCard({ name, number, id }) {
  
  const dispatch = useDispatch();

  const handleDeleteCard = e => {
    let currentId = e.currentTarget.parentNode.dataset.id;
    dispatch(deleteContact(currentId));
  };

  return (
    <li className={css.cardItem} title={name} data-id={id}>
      <button
        type="button"
        className={css.button}
        onClick={handleDeleteCard}
      ></button>
      <p className={css.contact}>
        <span className={css.value}>
          {name}: {number}
        </span>
      </p>
    </li>
  );
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};