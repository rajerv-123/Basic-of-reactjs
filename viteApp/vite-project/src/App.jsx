import { useState } from "react";
import "./App.css";

function App() {
  const [styleColor, setStyleColor] = useState("olive");
  // function changeColor(color) {
  //   setStyleColor(color);
  // }
  return (
    <div
      className="w-full h-screen duration-200 p-0 m-0"
      style={{ backgroundColor: styleColor }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setStyleColor("blue")}
            style={{ backgroundColor: "blue" }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black"
          >
            blue
          </button>
          <button
            onClick={() => setStyleColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => setStyleColor("green")}
            style={{ backgroundColor: "green" }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black"
          >
            green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
