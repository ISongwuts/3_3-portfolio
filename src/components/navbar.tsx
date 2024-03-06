import { navbarList } from "../data/navbar-list"

const Navbar = () => {

    return (
        <nav className="w-full flex justify-around p-5 border-2 shadow-md">
            <span className="text-xl font-bold">
                @ISongwuts
            </span>
            <ul className="flex gap-5">
                {
                    navbarList.map((list, index: number)=>(
                        <li key={index}><a href={list.path} className="hover:font-bold text-lg">{list.label}</a></li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar