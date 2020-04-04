import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
//import Pet from "./Pet";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),

  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Cockatiel",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Doink",
  //     animal: "Cat",
  //     breed: "Mixed",
  //   }),
  // ]);

  // return (
  //   <div>
  //     <h1 id="something-important">Adopt Me!</h1>
  //     <Pet name="Luna" animal="Dog" breed="Havanese" />
  //     <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
  //     <Pet name="Doink" animal="Cat" breed="Mixed" />
  //   </div>
  // );

  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

//ReactDOM.render(React.createElement(App), document.getElementById("root"));
//render(React.createElement(App), document.getElementById("root"));

render(<App />, document.getElementById("root"));
