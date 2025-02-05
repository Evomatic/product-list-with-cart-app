import styles from "./app.module.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className={styles["app"]}>
      Hello, this is a test. Is the Red Hat Text working?
      <Button>Placeholder</Button>
    </div>
  );
}

export default App;
