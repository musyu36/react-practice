import React from "react";
import "./App.css";

function App() {
  let items = [
    { name: "いちご", price: "100" },
    { name: "りんご", price: "150" },
    { name: "バナナ", price: "230" },
  ];

  return (
    <div className="App container">
      <table className="table table-striped">
        <tbody>
          {items.map((value) => (
            <tr>
              <th scppe="row">{value.name}</th>
              <td>{value.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
