import { useState, useEffect } from "react";
import $ from "jquery";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const [usersList, setUsersList] = useState(null);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = $(e.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
        setResult(data);
        getUsersList();
      },
    });
  };

  const getUsersList = () => {
    $.ajax({
      type: "GET",
      url: "http://localhost/backend/server.php",
      success(data) {
        setUsersList(JSON.parse(data));
      },
    });
  };

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <div className="App">
      <form
        action="http://localhost/backend/server.php"
        method="post"
        onSubmit={(event) => handleSubmit(event)}
      >
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => handleChange(event)}
        />
        <br />
        <button type="submit" style={{ backgroundColor: "green", color: "white" }}>Submit</button>
      </form>
      <h1>{result}</h1>
      <h3>Users List:</h3>
      {usersList === null ? (
        <p>Loading...</p>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
