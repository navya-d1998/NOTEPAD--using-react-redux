import "./App.css";
import DisplayTodos from "./components/NewNote";
import Todos from "./components/NoteList";
import Todos1 from "./components/NoteCount";
function App() {
  return (
    <div className="App">
     
     <Todos1 />
        <DisplayTodos />
        <Todos />
    </div>
  );
}

export default App;