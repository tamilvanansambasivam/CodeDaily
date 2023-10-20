import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/Heading";
import Content from "./src/Content";

function App() {
  return( <div > 
    <Heading heading="read" />
    <Content/>
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
