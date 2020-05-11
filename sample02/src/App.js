import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container text-center">
      <Clock />
    </div>
  );
  // let items = [
  //   { name: "いちご", price: "100" },
  //   { name: "りんご", price: "150" },
  //   { name: "バナナ", price: "230" },
  // ];
  // return (
  //   <div className="App container">
  //     <table className="table table-striped">
  //       <tbody>
  //         {items.map((value) => (
  //           <tr>
  //             <th scppe="row">{value.name}</th>
  //             <td>{value.price}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.now = new Date();

    // stateに入れたものは監視してくれている
    this.state = {
      time: `${this.now.getHours()} : ${this.now.getMinutes()} : ${this.now.getSeconds()}`,
    };

    //stateを使うときに必要
    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    this.now = new Date();
    this.state = {};

    this.setState((state) => ({
      time: `${this.now.getHours()} : ${this.now.getMinutes()} : ${this.now.getSeconds()}`,
    }));
  }
  render() {
    return <p onClick={this.refresh}>{this.state.time}</p>;
  }
}

export default App;
