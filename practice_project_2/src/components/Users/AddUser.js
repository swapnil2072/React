import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enterUserAge, setEnterUserAge] = useState(0);
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enterUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty value)",
      });
      return;
    }
    if (+enterUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    props.onAddUser(enteredUserName, enterUserAge);
    setEnteredUserName("");
    setEnterUserAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnterUserAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUserName}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age(years)</label>
          <input
            type="number"
            id="age"
            value={enterUserAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
