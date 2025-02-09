import styles from "./app.module.css";
import { Button } from "./components/Button";
import { CounterButton } from "./components/CounterButton";

function App() {
  return (
    <div className={styles["app"]}>
      {/* <Button>Placeholder</Button> */}
      <div>
        <CounterButton
          minusOnClick={() => console.log("minus")}
          addOnClick={() => console.log("add")}
        />
      </div>
    </div>
  );
}

export default App;
