import clsx from "clsx";
import styles from "../styles/modules/button.module.scss";

interface Props {
  children: string[] | string;
  variant: "primary" | "secondary";
  type: "button" | "submit";
  rest?: string;
  onClick?: () => void;
  onKeyDown?: () => void;
}

const Button = ({ children, variant, type, ...rest }: Props) => {
  const buttonClasses = clsx(styles.button, {
    [styles["button--primary"]]: variant === "primary",
    [styles["button--secondary"]]: variant === "secondary",
  });

  return (
    <button type={type} className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
