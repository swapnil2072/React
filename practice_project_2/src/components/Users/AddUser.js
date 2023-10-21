import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enterUserAge, setEnterUserAge] = useState(0);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enterUserAge.trim().length === 0
    ) {
      return;
    }
    if (+enterUserAge < 1) {
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

  return (
    <div>
      <ErrorModal
        title=" An error occured"
        message="something went wrong"
      ></ErrorModal>
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
