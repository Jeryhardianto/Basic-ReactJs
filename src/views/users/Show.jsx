import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../loading/Loading.css'


function Show(props) {
    const [user, setUser] = useState([]);
    let { identifier } = useParams();

    const [loading, setLoading] = useState(false)

    const getUser = async () => {
        setLoading(true)
        try {
            let response = await Axios.get(`http://jsonplaceholder.typicode.com/users/${identifier}`)
            setUser(response.data)
            setLoading(false)
        } catch (e) {
            console.log(e.message);
            setLoading(true)
        }
    }

    useEffect(() => {
        getUser()
    }, [identifier]);


    return (

        <div className="container">
            <div className="py-4">
                <h1>Users Detail Page</h1>
                <hr />
            </div>
            {
                loading ? <div className="loadingio-spinner-pulse-yp23jzhmdne "><div className="ldio-ia1ube0fhqk ">
                    <div></div><div></div><div></div>
                </div></div> :
                    <div className="card col-md-4">
                        <div className="card-header">{user.name}</div>
                        <div className="card-body">
                            <div>{user.username}</div>
                            <div>{user.website}</div>
                            <div>{user.phone}</div>
                            <div>{user.email}</div>
                        </div>
                    </div>
            }
        </div>

    )
}

export default Show
