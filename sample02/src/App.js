// import React from "react";
// import "./App.css";

// function App() {
//   return (
//     <div className="container text-center">
//       <Clock />
//     </div>
//   );
//   // let items = [
//   //   { name: "いちご", price: "100" },
//   //   { name: "りんご", price: "150" },
//   //   { name: "バナナ", price: "230" },
//   // ];
//   // return (
//   //   <div className="App container">
//   //     <table className="table table-striped">
//   //       <tbody>
//   //         {items.map((value) => (
//   //           <tr>
//   //             <th scppe="row">{value.name}</th>
//   //             <td>{value.price}</td>
//   //           </tr>
//   //         ))}
//   //       </tbody>
//   //     </table>
//   //   </div>
//   // );
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.now = new Date();

//     // stateに入れたものは監視してくれている
//     this.state = {
//       time: `${this.now.getHours()} : ${this.now.getMinutes()} : ${this.now.getSeconds()}`,
//     };

//     //stateを使うときに必要
//     this.refresh = this.refresh.bind(this);
//   }

//   refresh() {
//     this.now = new Date();
//     this.state = {};

//     this.setState((state) => ({
//       time: `${this.now.getHours()} : ${this.now.getMinutes()} : ${this.now.getSeconds()}`,
//     }));
//   }
//   render() {
//     return <p onClick={this.refresh}>{this.state.time}</p>;
//   }
// }

// export default App;

import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => (
  // ルーティング
  <BrowserRouter>
    <div class="container text-center mt-5">
      {/* path が / の時に Home コンポーネントを使用*/}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog/:id" component={Blog} />
      <Route path="/sum/:num1/:num2" component={Sum} />
    </div>
  </BrowserRouter>
);

const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <p>
        <Link to="/about">About</Link>
      </p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

const Blog = (props) => {
  // 渡されたパラメータの中から id と合致するものがあれば格納
  const { id } = props.match.params;

  return (
    <div>
      <p>{id} 番目の記事</p>
    </div>
  );
};

const Sum = (props) => {
  //渡されたパラメーターの中から num1, num2に合致するものを格納
  const { num1, num2 } = props.match.params;

  return (
    <div>
      <p>
        {/* parseIntでintに変換 */}
        {num1} + {num2} = {parseInt(num1) + parseInt(num2)}
      </p>
    </div>
  );
};

export default App;
