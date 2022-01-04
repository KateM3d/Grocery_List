import "./App.css";
import image from "./shopping.jpg";
import man from "./man.jpg";
import { GroceryList } from "./components/GroceryList";

function App() {
  return (
    <div className="app">
      <img src={image} alt="shopping" width="250px" />
      <h1>Grocery List</h1>
      <GroceryList />
      <img src={man} alt="man" width="250px" />
    </div>
  );
}

export default App;
