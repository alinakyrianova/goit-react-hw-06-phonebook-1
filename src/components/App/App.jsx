import { useState } from "react";
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactsList/ContactsList';
import { AppWrapper, Title, SearchWrapper, StyledTitles, CloseBtn, OpenPhonebook } from './app.styled';
import { useDispatch, useSelector } from "react-redux";
import { contactsSlice, filterSlice } from "redux/slices"; // Припустимо, що у вас є файли contactsSlice.js та filterSlice.js з визначеними slice'ами

const { actions: contactsActions, reducer: contactsReducer } = contactsSlice;
const { actions: filterActions, reducer: filterReducer } = filterSlice;

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = useSelector(state => state.contacts);
  const nameFromFilter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const showPhonebook = () => {
    setIsOpen(true);
  };

  const hidePhonebook = () => {
    setIsOpen(false);
  };

  const normalizedContacts = contacts.map(contact => ({
    ...contact,
    name: contact.name.toLowerCase(),
  }));

  const normalizedFilter = nameFromFilter.toLowerCase();

  const filteredContacts = normalizedContacts.filter(({ name }) =>
    name.includes(normalizedFilter)
  );

  const isContactExists = newContactName =>
    normalizedContacts.some(contact => contact.name === newContactName);

  const handleAddContact = newContact => {
    const newContactName = newContact.name.toLowerCase();

    if (isContactExists(newContactName)) {
      alert('This contact already exists!');
      return;
    }

    dispatch(contactsActions.addContact(newContact));
    hidePhonebook(); // Закриття телефонної книги після успішного додавання
  };

  return (
    <>
      {!isOpen && (
        <OpenPhonebook onClick={showPhonebook} className="phoneBook">
          Open Phonebook
        </OpenPhonebook>
      )}
      {isOpen && (
        <AppWrapper>
          <CloseBtn onClick={hidePhonebook} />
          <ContactsForm onAddContact={handleAddContact} />

          <SearchWrapper>
            <StyledTitles>
              <Title>Contacts</Title>
              <p>Find contacts by name</p>
            </StyledTitles>
            <Filter
              filter={nameFromFilter}
              getContact={e => dispatch(filterActions.contactsFilter(e.currentTarget.value))}
            />
            <ContactList
              filteredContacts={filteredContacts}
              removeContact={contactId => dispatch(contactsActions.removeContact(contactId))}
            />
          </SearchWrapper>
        </AppWrapper>
      )}
    </>
  );
};

