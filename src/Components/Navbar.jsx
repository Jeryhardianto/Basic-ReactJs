import React from 'react'
import { NavLink } from 'react-router-dom'
import { authUser } from '../store'
import { useRecoilValue } from 'recoil'
// import { Userprovider } from '../views/context/User'
// import AuthenticatedUser from './AuthenticatedUser'

//children => dari navbar
function Navbar({ children }) {
    //diambil dari store/index
    const { user } = useRecoilValue(authUser)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/users">Users</NavLink>
                            </li>
                            {/* State management Recoil  */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to={`/users/${user.id}`}>{user.username}</NavLink>
                            </li>

                            {/* <li className="nav-item"> */}
                            {/* <NavLink className="nav-link" to="/"> */}
                            {/* State management context */}
                            {/* <Userprovider> */}
                            {/* <AuthenticatedUser /> */}
                            {/* </Userprovider> */}
                            {/* </NavLink> */}
                            {/* </li> */}

                        </ul>

                    </div>

                </div>
            </nav>
            {/* children => utk memberi jarak antar navbar dan content */}
            <div className="py-4">
                {children}
            </div>

        </div>
    )
}

export default Navbar
