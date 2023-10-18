import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";


const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enterUserAge, setEnterUserAge] = useState(0);

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnterUserAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Age(years)</label>
        <input type="number" id="age" onChange={ageChangeHandler}></input>
        <Button type="submit">Add User </Button>
      </form>
    </Card>
  );
};

export default AddUser;
