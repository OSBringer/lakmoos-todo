import type { Component } from "solid-js";
import { createSignal, createResource, For } from "solid-js";
import styles from "../styles/Todo.module.css";
import { Puff } from "solid-spinner";

const handleFetch = async () =>
  (await fetch("http://localhost:8080/items")).json();
const Todo: Component = (props) => {
  const [fetch, setFetch] = createSignal(false);

  const [todos] = createResource(fetch, handleFetch);

  return (
    <div class={styles.todo_container}>
      <div>
        <h1>TODO</h1>
        <button onClick={() => setFetch(true)}>FETCH</button>
        <input></input> <button>+</button>
        <div class={styles.items_container}>
          <For each={todos()}>
            {(todo) => <div class={styles.item}>{todo}</div>}
          </For>
        </div>
      </div>
      {todos.loading && <Puff />}
    </div>
  );
};

export default Todo;
