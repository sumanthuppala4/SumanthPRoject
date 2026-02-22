import "./App.css";
import CustomDataGrid from "./Features/Components/CustomDataGrid/CustomDataGrid";
import Popup from "./Features/Components/Popup/Popup";

function App() {
  return (
    <div className="card">
      <div>
        {" "}
        <img
          src="https://img.freepik.com/free-photo/business-man-by-skyscraper_1303-13655.jpg?semt=ais_user_personalization&w=740&q=80"
          className="card-image"
        />
      </div>
      <p>John Doe </p>

      <div className="card-details">
        <p>91 987654321</p>
        <p>abc@gmail.com</p>
      </div>
    </div>
  );
}

export default App;
