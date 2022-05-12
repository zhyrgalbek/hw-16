import "./ToggleSwitch.css";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const ToggleSwitch = ({ label }) => {
    const contextData = useContext(AuthContext);
    return (
            <div className="container">
                {/* {label}{" "} */}
                <div className="toggle-switch">
                    <input type="checkbox" className="checkbox" 
                        name={label} id={label} onClick={contextData.toggleButton}  />
                    <label className="label" htmlFor={label}>
                    <span className="inner" />
                    <span className="switch" />
                    </label>
                </div>
            </div>
    );
};
  
export default ToggleSwitch;