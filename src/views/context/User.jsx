//State Management Context dengan API
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react' //1

const UserContext = createContext() //2

const Userprovider = ({ children }) => { // 3
    const [user, setUser] = useState([]) //4
    const [loading, setLoading] = useState(false); //1 loading step


    //5
    const getUser = async () => {
        setLoading(true) //2 loading step
        try {
            let response = await axios.get('http://jsonplaceholder.typicode.com/users/2')
            setUser(response.data)
            setLoading(false) //3 loading step
        } catch (e) {
            console.log(e.message);

        }
    }
    //6
    useEffect(() => {
        getUser()
    }, []);


    return (

        // 7
        // 4 laodning step value={{ laoding }}
        <UserContext.Provider value={{ user, loading }}>
            {/* 8 */}
            {children}
        </UserContext.Provider>
    )

}

export { UserContext, Userprovider }


//State Management Context
// import React, { createContext } from 'react' //1

// const UserContext = createContext() //2

// const Userprovider = ({ children }) => { // 3
//     const user = { //4
//         name: 'Jery Hardianto'
//     }

//     return (//5
// 6
//         <UserContext.Provider value={{ user }}>
//             {/* 7 */}
//             {children}
//         </UserContext.Provider>
//     )

// }

// export { UserContext, Userprovider }

