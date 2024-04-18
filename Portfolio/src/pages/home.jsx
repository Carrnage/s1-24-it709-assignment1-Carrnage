import { Outlet, Link } from "react-router-dom"


export default function Home() {
    return (
        <div id="detail">
            <Outlet />
            Hello World
            </div>
    )
}