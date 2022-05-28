import './App.css';
import contacts from './contacts.json';

function App() {
  let fiveFirstContacts = contacts.slice(0, 5);
  return (
    <div className="App">
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
          {fiveFirstContacts.map((contact) => {
            const wonOscar = contact.wonOscar ? '🏆' : null;
            const wonEmmy = contact.wonEmmy ? '🌟' : null;
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    style={{ width: 200, height: 200 }}
                  />
                </td>
                <td>{contact.name}</td>
                <td>
                  {(Math.round(contact.popularity * 100) / 100).toFixed(2)}
                </td>
                <td>{wonOscar}</td>
                <td>{wonEmmy}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
