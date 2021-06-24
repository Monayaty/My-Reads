import React from "react";
import AllShelves from "./AllShelves";
import Header from "./Header";
import Button from "./Button";

function Home() {
  return (
    <div className="list-books">
      <Header />
      <AllShelves />
      <Button />
    </div>
  );
}

export default Home;