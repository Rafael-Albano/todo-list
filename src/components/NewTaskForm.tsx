import { PlusCircle } from "@phosphor-icons/react";
import styles from "./Task.module.css";
import { Button } from "./Button";
import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../types/Task";

type Props = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};
export const NewTaskForm = ({ setTasks }: Props) => {
  const [taskDescription, setTaskDescription] = useState<string>("");
  const handleNewTask = (event: ChangeEvent<HTMLInputElement>): void => {
    event.target.setCustomValidity("");

    setTaskDescription(event.target.value);
  };

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();

    if (!taskDescription) {
      return;
    }

    const task = new Task(taskDescription);

    setTasks((prevState) => [...(prevState as Task[]), task]);

    setTaskDescription("");
  };

  return (
    <form className={styles.descriptionTaskForm} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskDescription}
        onChange={handleNewTask}
      />
      <Button>
        Criar <PlusCircle size={20} />
      </Button>
    </form>
  );
};
