import type { Component } from "solid-js";
import logo from "./assets/xd.png";
import styles from "./styles/App.module.css";
import Todo from "./components/Todo";
const App: Component = () => {
  return (
    <div class={styles.App}>
      <div class={styles.App_header}>
        <h2>Lakmoos</h2>
        <div class={styles.image_repeater} />
        {/* <div class={styles.image_container}>
          <img class={styles.lakmoos_image} src={logo} alt="Solid logo" />

        </div> */}
      </div>
      <Todo />
    </div>
  );
};

export default App;
