import "./Users.css";
import TableComponent from "./../../Components/Table/Table";
import Loader from "./../../Components/Loader/Loader";
import { useEffect, useState } from "react";
const Users = (props) => {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [filterBy, setFilterBy] = useState("email");
  const [error, setError] = useState();
  const logoutHandler = () => {
    localStorage.removeItem("FreJun_task_userInfo");
    props.loginStatusHandler(false);
  };

  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true);
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();

        setAllUsers(data.users);
        setUsers(data.users);
        setIsLoading(false);
      } catch (err) {
        setError("Something went wrong !");
      }
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    if (query.trim().length === 0) {
      setUsers(allUsers);
      return;
    }
    const filteredUsers = allUsers.filter((user) => {
      return user[filterBy].toLowerCase().includes(query.toLowerCase());
    });
    setUsers(filteredUsers);
  }, [allUsers, query, filterBy]);

  return (
    <div className="user-container">
      <nav>
        <h1 className="navbar-brand">FreJun Task</h1>
        <button type="button" onClick={logoutHandler}>
          Logout
        </button>
      </nav>

      <main>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            name="search"
            value={query}
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
          >
            <option value="email">Email</option>
            <option value="firstName">First Name</option>
            <option value="lastName">Last Name</option>
          </select>
        </form>
        {isLoading && <Loader />}
        {!isLoading && (
          <>
            <TableComponent data={users} />
          </>
        )}
        {!isLoading && error && <p>{error}</p>}
      </main>
    </div>
  );
};
export default Users;
