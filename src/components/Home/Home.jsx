import "./home.css";
import { auth } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";

const signOff = () => {
    return auth.signOut();
    navigate("/");
};

export function Home(props) {
    return (
        <div className="innerBox">
            <div>
                <h1>
                    <Link to="/login">LogIn</Link>
                </h1>
                <br />
                <h1>
                    <Link to="/signup">SignUp</Link>
                </h1>
            </div>
            <h2>
                {props.name ? `Welcome: ${props.name}` : "Insert your account"}
            </h2>
            <button onClick={signOff}>Sign Off</button>
        </div>
    );
}
