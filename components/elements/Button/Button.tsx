import styles from "./Button.module.scss";
import * as React from "react";

type TButtonProps = {
    handleClick: () => void;
    children?:React.ReactNode; 
}
const Button = ({handleClick, children}:TButtonProps): JSX.Element => {
    return <button className={styles.Button} onClick={handleClick}>{children}</button>;
};
export { Button };
