import clsx from "clsx";
import styles from "../styles/modules/button.module.scss";
import { ReactNode, SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

const SelectButton = ({ children, ...rest }: Props) => {
  return (
    <select className={clsx(styles.button, styles.button__select)} {...rest}>
      {children}
    </select>
  );
};
export default SelectButton;
