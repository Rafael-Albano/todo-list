import { Task } from "../types/Task";
import { TaskCreated } from "./TaskCreated";
import styles from "./TaskList.module.css";
import { ClipboardText } from "@phosphor-icons/react";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const TaskList = ({ tasks, setTasks }: Props) => {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div className={styles.created}>
          <p>Tarefas criadas</p>
          <span className={styles.counter}>{tasks.length}</span>
        </div>

        <div className={styles.done}>
          <p>Concluídas</p>
          <span className={styles.counter}>
            {tasks.length} de {tasks.length}
          </span>
        </div>
      </header>

      {!tasks.length ? (
        <div className={styles.empty}>
          <ClipboardText size={56} />
          <div>
            <div>
              <span>
                Você ainda não tem tarefas cadastradas
                <br />
              </span>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.list}>
          {tasks?.map(({ id, description, isCompleted }) => (
            <TaskCreated
              key={id}
              id={id}
              description={description}
              isCompleted={isCompleted}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        </div>
      )}
    </section>
  );
};
