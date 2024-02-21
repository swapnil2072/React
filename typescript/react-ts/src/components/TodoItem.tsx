import React from "react";
import classes from "./TodoItems.module.css";

const TodoItem: React.FC<{ text: string }> = (props) => {
    return <li className={classes.item}>{props.text}</li>;
};

export default TodoItem;
