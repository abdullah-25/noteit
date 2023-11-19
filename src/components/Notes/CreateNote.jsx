import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function CreateNote() {
  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker  />
      </LocalizationProvider> */}
      <textarea
        cols="10"
        rows="5"
        placeholder="Type...."
        maxLength="100"
      ></textarea>
      <div className="note__footer">
        <span className="label"> left</span>
        <button className="note__save">Save</button>
      </div>
    </div>
  );
}
