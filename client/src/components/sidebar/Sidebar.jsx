import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT AUTHOR</span>
                <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/122780657_2773030649648892_6344824542303049011_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=arfhyz6m4GsAX_iOj-R&_nc_ht=scontent.fhan3-1.fna&oh=0724adb5d2217037eb11a421ba988ee1&oe=61B84F06" alt="" />
                <p>My name is Do Huu Minh. I’m 22 years old and I’m single. I like reading books and play guitar. I’m a careful and hard-working person. </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c)=>(
                    <Link to={`/?cat=${c.name}`} className="link">
                    <li className="sidebarListItem">{c.name}</li>
                    </Link>
                    ))}

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook" ></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>

            </div>
        </div>
    )
}
