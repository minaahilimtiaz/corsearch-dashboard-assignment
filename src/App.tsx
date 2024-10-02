import React, { useEffect, useState } from "react";
import "./App.scss";
import UserCard from "./components/UserCard/UserCard";
import { fetchUsers } from "./api/user";
import { User } from "./types/User";

function App() {
  const [usersList, setUsersList] = useState<User[]>([]);

  const fetchUsersList = async () => {
    try {
      const data: User[] = await fetchUsers();
      setUsersList(data);
    } catch (err) {
      alert(String(err));
    }
  };

  useEffect(() => {
    fetchUsersList();
  }, []);

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
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        }}
      />
    </div>
  );
}

export default App;
