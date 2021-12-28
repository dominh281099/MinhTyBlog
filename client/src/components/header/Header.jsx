import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
            <span className="headerTitleSm">Music & Life</span>    
            <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/1490844/pexels-photo-1490844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        </div>
    )
}
