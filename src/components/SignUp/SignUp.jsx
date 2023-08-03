import styles from "./SignUp.module.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { InputControl } from "../InputControl/InputControl";

export function SignUp() {
    const navigate = useNavigate();
    const [values, setValues] = useState({ name: "", email: "", password: "" });
    const [errMsg, setErrMsg] = useState([]);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const sigunup = () => {
        if (!values.name || !values.email || !values.password) {
            setErrMsg("Fill in all fields");
            return;
        }
        setErrMsg(""); //si llena todos los campos vaciamos el mensaje de error
        setSubmitButtonDisabled(true); //y habilitamos el boton de enviar
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(async (res) => {
                setSubmitButtonDisabled(false);
                const user = res.user;
                await updateProfile(user, { displayName: values.name });
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
                <h1 className={styles.heading}>Sign Up</h1>
                <form action="">
                    <InputControl
                        label="Name "
                        type="text"
                        placeholder="Enter your name"
                        onChange={(event) =>
                            setValues((prev) => ({
                                ...prev,
                                name: event.target.value,
                            }))
                        }
                    />
                    <InputControl
                        label="Email "
                        type="email"
                        placeholder="Enter your email"
                        onChange={(event) =>
                            setValues((prev) => ({
                                ...prev,
                                email: event.target.value,
                            }))
                        }
                    />
                    <InputControl
                        label="Password "
                        type="password"
                        placeholder="Enter your password"
                        onChange={(event) =>
                            setValues((prev) => ({
                                ...prev,
                                password: event.target.value,
                            }))
                        }
                    />
                </form>

                <div className={styles.footer}>
                    <b className={styles.error}>{errMsg}</b>
                    <button onClick={sigunup} disabled={submitButtonDisabled}>
                        Save
                    </button>
                    <p>
                        If you have an account{" "}
                        <span>
                            <Link to="/login">Login</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
