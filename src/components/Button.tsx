import { MouseEventHandler, ReactNode } from "react";

type Props = {
  children: ReactNode;
  type?: string;
  cssModuleClass: CSSModuleClasses[string]
  click: MouseEventHandler<HTMLButtonElement>
};
export const Button = ({ children, cssModuleClass, click }: Props) => {
  return <button className={cssModuleClass} onClick={click}>{children}</button>;
};
