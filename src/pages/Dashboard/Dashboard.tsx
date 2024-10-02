import { useEffect, useState } from "react";

import { fetchUsers } from "../../api/user";
import { User } from "../../types/User";
import styles from "./styles/Dashboard.module.scss";
import UserCard from "../../components/UserCard/UserCard";

const Dashboard: React.FC<{}> = () => {
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
    <div className={styles.container}>
      {usersList.length > 0 ? (
        <div className={styles.gridContainer}>
          {usersList.map((user) => (
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
