import style from "../styles/modules/todoItem.module.scss";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface Props {
  checked: boolean;
  handleCheck: () => void;
}

const checkVariants = {
  initial: {
    color: "#fff",
  },
  checked: {
    pathLength: 1,
  },
  unchecked: {
    pathLength: 0,
  },
};

const boxVariant = {
  checked: {
    background: "var(--primaryPurple)",
    transition: {
      duration: 0.1,
    },
  },
  unchecked: {
    background: "var(--gray-1)",
    transition: {
      duration: 0.1,
    },
  },
};

const CheckBox = ({ checked, handleCheck }: Props) => {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <motion.div
      className={style.svgBox}
      animate={checked ? "checked" : "unchecked"}
      variants={boxVariant}
      onClick={handleCheck}
    >
      <motion.svg
        className={style.svg}
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={checkVariants}
          animate={checked ? "checked" : "unchecked"}
          style={{ pathLength, opacity }}
          fill="none"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
};
export default CheckBox;
