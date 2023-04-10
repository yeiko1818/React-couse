import { React } from "react";
import "../css/TodoList.css";

function TodoList(props) {
  return (
    <section className="s-ul">
      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };
