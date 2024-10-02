import { useEffect, useRef, useState } from "react";

import { fetchUsers } from "../../api/user";
import { User } from "../../types/User";
import styles from "./styles/Dashboard.module.scss";
import UserCard from "../../components/UserCard/UserCard";
import SearchBar from "../../components/SearchBar/SearchBar";

const Dashboard: React.FC<{}> = () => {
  const userListRef = useRef<User[]>([]);
  const [filteredUserList, setFilteredUserList] = useState<User[]>([]);

  const filterUserListByName = (name: string) => {
    const filtered = userListRef.current.filter((user) =>
      user.name.includes(name),
    );
    setFilteredUserList(filtered);
  };

  const fetchUsersList = async () => {
    try {
      const data: User[] = await fetchUsers();
      userListRef.current = data;
      setFilteredUserList(data);
    } catch (err) {
      alert(String(err));
    }
  };

  useEffect(() => {
    fetchUsersList();
  }, []);

  return (
    <div className={styles.container}>
      <SearchBar
        placeholder="Search by name"
        onSubmit={filterUserListByName}
        searchBarStyle={styles.searchBar}
      />
      {filteredUserList.length > 0 ? (
        <div className={styles.gridContainer}>
          {filteredUserList.map((user) => (
            <UserCard
              name={user.name}
              email={user.email}
              phone={user.phone}
              website={user.website}
              address={user.address}
            />
          ))}
        </div>
      ) : (
        <p>No users found. Please try again later.</p>
      )}
    </div>
  );
};

export default Dashboard;
