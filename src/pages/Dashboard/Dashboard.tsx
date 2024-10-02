import { useEffect, useRef, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  ToggleButtonGroup,
  ToggleButton,
  Alert,
  AlertTitle,
} from "@mui/material";

import { fetchUsers } from "../../api/user";
import { SORTING_ORDER } from "../../constant";
import { User } from "../../types/User";
import styles from "./styles/Dashboard.module.scss";
import UserCard from "../../components/UserCard/UserCard";
import SearchBar from "../../components/SearchBar/SearchBar";

const Dashboard: React.FC<{}> = () => {
  const userListRef = useRef<User[]>([]);
  const [filteredUserList, setFilteredUserList] = useState<User[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [sortingOrder, setSortingOrder] = useState<SORTING_ORDER>(
    SORTING_ORDER.ASCENDING,
  );

  const filterUserListByName = (name: string) => {
    const filtered = userListRef.current.filter((user) =>
      user.name.includes(name),
    );
    setFilteredUserList(filtered);
  };

  const sortByEmail = () => {
    const sortedList = [...filteredUserList].sort((a, b) => {
      if (a.email < b.email)
        return sortingOrder === SORTING_ORDER.ASCENDING ? -1 : 1;
      if (a.email > b.email)
        return sortingOrder === SORTING_ORDER.ASCENDING ? 1 : -1;
      return 0;
    });
    setFilteredUserList(sortedList);
  };

  const fetchUsersList = async () => {
    try {
      const data: User[] = await fetchUsers();
      userListRef.current = data;
      setFilteredUserList(data);
    } catch (err) {
      setIsError(true);
      setErrorMessage(String(err));
    }
  };

  const onSortingOrderChanged = (
    event: React.MouseEvent<HTMLElement>,
    newValue: SORTING_ORDER,
  ) => {
    setSortingOrder(newValue ?? sortingOrder);
  };

  useEffect(() => {
    fetchUsersList();
  }, []);

  useEffect(() => {
    sortByEmail();
  }, [sortingOrder]);

  return (
    <div className={styles.container}>
      <SearchBar
        placeholder="Search by name"
        onSubmit={filterUserListByName}
        searchBarStyle={styles.searchBar}
      />
      <ToggleButtonGroup
        value={sortingOrder}
        exclusive
        onChange={onSortingOrderChanged}
        size={"small"}
        className={styles.toggleButton}
      >
        <ToggleButton value={SORTING_ORDER.ASCENDING}>
          <ArrowDownwardIcon />
        </ToggleButton>
        <ToggleButton value={SORTING_ORDER.DESCENDING}>
          <ArrowUpwardIcon />
        </ToggleButton>
      </ToggleButtonGroup>
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
      {isError && (
        <Alert
          severity="error"
          onClose={() => {
            setIsError(!isError);
          }}
        >
          <AlertTitle>Error</AlertTitle>
          {errorMessage}
        </Alert>
      )}
    </div>
  );
};

export default Dashboard;
