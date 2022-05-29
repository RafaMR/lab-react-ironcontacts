import './App.css';
import contacts from './contacts.json';
import { useState } from 'react';

let fiveFirstContacts = contacts.slice(0, 5);

function App() {
  const [contactsList, setContactsList] = useState(fiveFirstContacts);

  const addRandomContact = () => {
    const contactsListCopy = [...contactsList];
    const randomContact =
      contactsListCopy[Math.floor(Math.random() * contactsListCopy.length)];
    contactsListCopy.push(randomContact);
    setContactsList(contactsListCopy);
  };

  const sortByName = () => {
    const contactsListCopy = [...contactsList];
    contactsListCopy.sort((a, b) => a.name.localeCompare(b.name));
    setContactsList(contactsListCopy);
  };

  const sortByPopularity = () => {
    const contactsListCopy = [...contactsList];
    contactsListCopy.sort((a, b) => b.popularity - a.popularity);
    setContactsList(contactsListCopy);
  };

  const deleteButton = (index) => {
    const contactsListCopy = [...contactsList];
    contactsListCopy.splice(index, 1);
    setContactsList(contactsListCopy);
  };

  return (
    <div className="App">
      <h1 style={{ marginBottom: 30 }}>IRONCONTACTS</h1>
      <button onClick={addRandomContact} style={{ marginRight: 50 }}>
        Add Random Contact
      </button>
      <button onClick={sortByName} style={{ marginRight: 50 }}>
        Sort by Name
      </button>
      <button onClick={sortByPopularity} style={{ marginBottom: 20 }}>
        Sort by Popularity
      </button>
      <table>
        <thead>
          <tr>
            <td>
              <h2>Picture</h2>
            </td>
            <td>
              <h2>Name</h2>
            </td>
            <td>
              <h2>Popularity</h2>
            </td>
            <td>
              <h2>Won Oscar</h2>
            </td>
            <td>
              <h2>Won Emmy</h2>
            </td>
          </tr>
        </thead>
        <tbody>
          {contactsList.map((contact) => {
            const wonOscar = contact.wonOscar ? '🏆' : null;
            const wonEmmy = contact.wonEmmy ? '🌟' : null;
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>
                  {(Math.round(contact.popularity * 100) / 100).toFixed(2)}
                </td>
                <td>{wonOscar}</td>
                <td>{wonEmmy}</td>
                <td>
                  <button onClick={() => deleteButton(contact.id)}>
                    Delete Contact
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
