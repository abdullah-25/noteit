import Note from "../../components/Notes/Note.jsx";
import "../../App.css";
import CreateNote from "./CreateNote.jsx";

export default function Notes() {
  return (
    <div className="notes">
      <Note />
      <Note />
      <CreateNote />
    </div>
  );
}
