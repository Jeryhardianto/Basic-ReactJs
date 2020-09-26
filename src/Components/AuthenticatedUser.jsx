import React, { useContext } from 'react'
import { UserContext } from '../views/context/User'
import '../../src/views/loading/Loading.css'

function AuthenticatedUser(props) {
    //5 loading step {laoding}
    const { user, loading } = useContext(UserContext)
    return (
        <div className="container">
            {
                loading ? <div>Laoding . . .</div> :
                    <div>
                        {user.name}
                    </div>
            }
        </div>
    );
}

export default AuthenticatedUser;