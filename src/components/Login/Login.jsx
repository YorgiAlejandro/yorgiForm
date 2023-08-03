import { InputControl } from "../InputControl/InputControl";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({ email: "", password: "" });
    const [errMsg, setErrMsg] = useState([]);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const start = () => {
        if (!values.email || !values.password) {
            setErrMsg("The inserted data is incorrect");
            return;
        }
        setErrMsg("");
        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(async (res) => {
                setSubmitButtonDisabled(false);
                navigate("/");
            })
            .catch((err) => {
                setSubmitButtonDisabled(false);
                setErrMsg(err.message);
            });
    };
    return (
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>LogIn</h1>
                <form action="">
                    <InputControl
                        type="text"
                        label="Email"
                        onChange={(event) =>
                            setValues((prev) => ({
                                ...prev,
                                email: event.target.value,
                            }))
                        }
                        placeholder="Enter your email"
                    />
                    <InputControl
                        type="password"
                        label="Password"
                        onChange={(event) =>
                            setValues((prev) => ({
                                ...prev,
                                password: event.target.value,
                            }))
                        }
                        placeholder="Enter your password"
                    />
                </form>

                <div className={styles.footer}>
                    <b className={styles.error}>{errMsg}</b>
                    <button onClick={start} disabled={submitButtonDisabled}>
                        Login
                    </button>
                    <p>
                        Create an <Link to="/signup">Account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
