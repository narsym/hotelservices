import {NavLink} from 'react-router-dom';

const GuestNavbar = () => {
    return (
        <>
            <div class="card" >
            <div class="container">
            Navbar:<br></br>
            <NavLink to = '/guest'> Guest </NavLink><br/>
            <NavLink to = '/analytics'> Analytics </NavLink> 
            </div>
            </div>
            
        </>
    );
}

export default GuestNavbar;