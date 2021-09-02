import { useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";

const App = () => {

  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: 'This is my first note!',
    date: "15/04/2021"
    },
    {
    id: nanoid(),
    text: 'This is my second note!',
    date: "20/04/2021"
    },
    {
    id: nanoid(),
    text: 'This is my third note!',
    date: "25/04/2021"
    },
    {
    id: nanoid(),
    text: 'This is my fourth note!',
    date: "30/04/2021"
    },

]);

  return (
  // <p>Hello React! <b>Be my companion always!....</b></p>
  <div className='container'>
    <NotesList notes={notes}/>
  </div>

  )
}

export default App;