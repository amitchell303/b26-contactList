import { useState } from "react";
import { useEffect } from "react";

function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
        console.log("Selected contact:", contact);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{contact.name}</h2>
      <table>
        <tbody>
          <tr>
            <th>Email</th>
            <td>{contact.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{contact.phone}</td>
          </tr>
          <tr>
            <th>Company</th>
            <td>{contact.company.name}</td>
          </tr>
          <tr>
            <th>Website</th>
            <td>{contact.website}</td>
          </tr>
        </tbody>
      </table>
      <div id="button">
        <button onClick={() => setSelectedContactId(null)}>
          Back to Contact List
        </button>
      </div>
    </div>
  );
}

export default SelectedContact;
