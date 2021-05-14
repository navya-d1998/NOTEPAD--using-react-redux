import "./App.css";
import NewNote from "./components/NewNote";
import NoteList from "./components/NoteList";
import NoteCount from "./components/NoteCount";
function App() {
  return (
    <div className="App">
     
     <NoteCount />
        <NewNote />
        <NoteList />
    </div>
  );
}

export default App;