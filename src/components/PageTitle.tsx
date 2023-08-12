import style from "../styles/modules/title.module.scss";

interface PageTitleProps {
  children: string;
}

const PageTitle = ({ children, ...rest }: PageTitleProps) => {
  return (
    <p className={style.title} {...rest}>
      {children}
    </p>
  );
};

export default PageTitle;
