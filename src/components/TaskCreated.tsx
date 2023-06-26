import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import { Task } from "../types/Task";
import styles from "./TaskCreated.module.css";

type Props = Omit<Task, "createdAt" | "updatedAt"> & {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};
export const TaskCreated = ({
  id,
  description,
  isCompleted,
  tasks,
  setTasks,
}: Props) => {
  const onDeleteTask = () => {
    if (!id) return;
    const newTasks = tasks.filter(({ id: taskId }) => taskId !== id);
    setTasks([...newTasks]);
  };
  return (
    <>
      <div className={styles.task}>
        {!isCompleted ? <Circle size={24} /> : <CheckCircle size={24} />}
        <p>{description}</p>
        <Trash size={24} onClick={onDeleteTask} />
      </div>
    </>
  );
};
