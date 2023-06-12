import css from './ContactList.module.css';
import ContactCard from '../ContactCard/ContactCard';
import PropTypes from 'prop-types';


export default function ContactList(props) {
  const {list} = props;
  return (
    <ul className={css.contactList}>
      {list.map(item => {
        return (
          <ContactCard
            name={item.name}
            number={item.number}
            id={item.id}
            key={item.id}
          />
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  list: PropTypes.array,

};