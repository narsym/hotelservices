
import {NavLink} from 'react-router-dom';

const StaffNavbar = () => {
    return (
        <>
            <div class="card" >
            <div class="container">
            <NavLink to = '/staff'> Staff </NavLink><br></br>
            <NavLink to = '/analytics'> Analytics </NavLink> 
            </div>
            </div>
            
        </>
    );
}

export default StaffNavbar;