import { Trash, Check } from "@phosphor-icons/react";
import { Task } from "../types/Task";
import styles from "./TaskCreated.module.css";
import { Button } from "./Button";

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
  const taskCompleted = () => {
    const tasksUpdated = tasks.map(task => {
      if (task.id === id) {
        task.isCompleted = true
      }

      return task
    })

    setTasks([...tasksUpdated])
  }
  const onDeleteTask = () => {
    if (!id) return;
    const newTasks = tasks.filter(({ id: taskId }) => taskId !== id);
    setTasks([...newTasks]);
  };


  return (
    <>
      <div className={styles.task}>   
        <Button cssModuleClass={styles['button']} click={taskCompleted}>
          <span className={isCompleted ? styles.checked : styles.unchecked}>
            {isCompleted && <Check weight="bold" size={10}/> }
          </span>
        </Button> 

        {!isCompleted ? <p>{description}</p> : <p><del>{description}</del></p>}

        <Button cssModuleClass={styles['button']} click={onDeleteTask}>
          <span className={styles['trash-icon']}>
            <Trash size={20} />
          </span>
        </Button>
      </div>
    </>
  );
};
