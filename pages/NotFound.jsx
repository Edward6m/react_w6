import { Link } from "react-router-dom"


export default function NotFound() {
    return (
        <div>
            <h1>不存在的頁面</h1>
            <Link to="/">回到首頁</Link>
        </div>
    )
}