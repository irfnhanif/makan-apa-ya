import { Toaster } from "sonner";
import "./App.css";
import FoodRoulette from "./components/FoodRoulette";

function App() {
  return (
    <>
      <FoodRoulette />
      <Toaster richColors position="top-center" />
    </>
  );
}

export default App;
