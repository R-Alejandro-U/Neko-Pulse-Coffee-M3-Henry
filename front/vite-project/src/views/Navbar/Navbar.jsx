import { useContext } from "react"
import { NavbarElements } from "../../components/Navbar/NavbarElements"
import { usersContex } from "../../Contex/UsersContex"

export const Navbar = () => {
    const { logOut } = useContext(usersContex)
    return(
        <NavbarElements logOut={logOut}/>
    )
}