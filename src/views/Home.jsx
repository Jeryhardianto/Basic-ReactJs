// import React, { useContext } from 'react'
import React from 'react'
import { useRecoilState } from 'recoil'
import AuthenticatedUser from '../Components/AuthenticatedUser'
// import { UserContext, Userprovider } from './context/User'
import { Userprovider } from './context/User'

//utk cara ini bisa juga menggunakan cara dengan membuat file baru exp: di file AuthenticatedUser.jsx
// const User = () => { //1 utk state management context
//     const { user } = useContext(UserContext) //2
//     return (
//         <div>
//             {/* 3 */}
//             My name is : {user.name}
//         </div>
//     )
// }

import { theme } from '../store'



function Home() {
    //3.atom -> change theme
    const [currentTheme, setCurrentTheme] = useRecoilState(theme)


    return (

        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <hr />
                <div>
                    <div className="row">
                        <h5>Pilih Tema</h5>
                        <div className="col-md-4">
                            <select value={currentTheme} onChange={(e) => setCurrentTheme(e.target.value)} className="form-control">
                                <option value="dark">Gelap</option>
                                <option value="light">Terang</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    {/* 4 masukan ke <UserProvider> */}
                    <Userprovider>
                        {/*5 panggil User di step 1 */}
                        {/* <User /> */}
                        {/* Menggunakan cara ke 2  */}
                        <div className="d-flex">
                            <div >
                                My name is
                         </div>
                            <strong><AuthenticatedUser /></strong>
                        </div>
                    </Userprovider>
                </div>
            </div>
        </div>

    )
}

export default Home
