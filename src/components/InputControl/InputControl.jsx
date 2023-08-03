/* eslint-disable react/prop-types */
import styles from "./InputControl.module.css";
export function InputControl(props) {
    return (
        <div className={styles.container}>
            {props.label && (
                <label className={styles.label}>{props.label}</label>
            )}
            <input className={styles.input} {...props} />
        </div>
    );
}
