import { NavLink } from "react-router-dom";
import "./Navbar.css";


export default function Navbar() {
    return (
    <>
           <section className=" w-full bg-lime-300 p-2  ">
            <div className="flex justify-around gap-10 text-white ">
           <NavLink
            to="/"
            id="link-nav"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }>
                HOME
            </NavLink>
            <NavLink
            to="/talleres"
            id="link-nav"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }>
                TALLERES
            </NavLink>
            <NavLink
            to="/informes"
            id="link-nav"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }>
                INFORMES
            </NavLink>
            <NavLink
            to="/clases"
            id="link-nav"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }>
                CLASES
            </NavLink>
            </div>
           </section>
    </>
    )
}

