import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { NewTaskForm } from "./components/NewTaskForm";
import { TaskList } from "./components/TaskList";
import { useState } from "react";
import { Task } from "./types/Task";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <NewTaskForm setTasks={setTasks} />
        <section>
          <TaskList tasks={tasks} setTasks={setTasks} />
        </section>
      </main>
    </>
  );
};

export default App;
