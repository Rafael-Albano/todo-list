import { ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
  children: ReactNode;
  type?: string;
};
export const Button = ({ children }: Props) => {
  return <button className={styles.buttonInput}>{children}</button>;
};
