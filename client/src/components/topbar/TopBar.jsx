import { Link } from "react-router-dom";
import "./topbar.css";
import { Context } from "../../context/Context";
import { useContext } from "react";



export default function Topbar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:8000/images/";

    // const user = false;
    const hanldeLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
    return (
        <div className="top">
            <div className="topLeft">
                <Link to="/">
                    <img src="https://1000logos.net/wp-content/uploads/2021/05/Blogger-logo.png" className="topLeftLogo" alt="" />
                </Link>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/" >HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/" >CATEGORIES</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/" >FAVORITE</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write" >WRITE</Link>
                    </li>
                    <li className="topListItem" onClick={hanldeLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <Link to="/settings">
                            <img className="topImg"
                                src={PF + user.profilePic}
                                alt=""
                            />
                        </Link>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login" >LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register" >REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
