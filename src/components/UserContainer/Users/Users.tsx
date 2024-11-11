import { useEffect, useState } from 'react';
import { User } from '../User/User';
import { userService } from '../../../services/userService';
import { UserDetails } from '../UserDetails/UserDetail';
import css from './Users.module.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);
    
    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    //@ts-ignore
    const getCurrentUser = (user) => {
        setUserDetails(user);
    }

    return ( 
        <div className={css.Users}>
            <div>
            {users.length && users.map(
                //@ts-ignore
                user => <User key={user.id} user={user} getCurrentUser={getCurrentUser} />)}
            </div>
                <hr />
                {userDetails && <UserDetails userDetails={userDetails}/>}
        </div>
    )
}

export { Users };