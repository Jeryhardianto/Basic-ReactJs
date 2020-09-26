import React from 'react'

// Fecthing data dengan useEffect
import Axios from 'axios'
import React, { useEffect, useState } from 'react'


function FecthingDataUseEffect() {
    //utk user ketika dinamik
    const [identifier, setIndentifier] = useState(1)
    const [user, setUsers] = useState([])
    //loading
    const [loading, setLoading] = useState(false)

    const getUser = async () => {
        setLoading(true)
        try {
            let response = await Axios.get(`http://jsonplaceholder.typicode.com/users/${identifier}`)
            setUsers(response.data);
            setLoading(false)
        } catch (e) {
            setLoading(true)
            console.log(e.message);
        }
    }

    //useEffect
    useEffect(() => {
        //mengambil isi dari getUser
        getUser()
        //identifier ketika menggunakan utkuser dinamic
    }, [identifier])

    return (
        <div className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <input type="text" name="identifier" value={identifier} onChange={(e) => setIndentifier(e.target.value)} className="form-control" />
                        {
                            loading ? <div>Laoding . . .</div> :
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Username</th>
                                            <th>Email</th>
                                            <th>Website</th>
                                            <th>Phone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr >
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.website}</td>
                                            <td>{user.phone}</td>
                                        </tr>
                                        {/* {
                  users.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>{user.phone}</td>
                      </tr>
                    )
                  })
                } */}
                                    </tbody>
                                </table>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FecthingDataUseEffect
