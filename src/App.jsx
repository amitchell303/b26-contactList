import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// I dont like what bootstrap did for styling, but I want to make my button fancy--h help
import ContactList from "./components/contactList";
import { useState } from "react";
import SelectedContact from "./components/SelectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App;
