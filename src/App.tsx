import React from "react";
import "./App.scss";
import UserCard from "./components/UserCard/UserCard";

function App() {
  return (
    <div className="App">
      <UserCard
        name={"Leanne Graham"}
        email={"Sincere@april.biz"}
        phone={"1-770-736-8031 x56442"}
        website={"hildegard.org"}
        address={{
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipCode: "92998-3874",
        }}
      />
    </div>
  );
}

export default App;
