import {url} from '../shared/url';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Services from './Services';
import Users from './Users';
import {useEffect} from 'react';
import StaffNavbar from '../StaffNavbar';
import {useHistory} from 'react-router-dom';


const Staff = () => {
    let history = useHistory();
    if(localStorage.getItem('userId') == '') {
        history.push('/');
    }
    const add = () => {
        var data = {
            name: document.getElementById('name').value,
            desc: document.getElementById('desc').value,
            img: "img",
            price: document.getElementById('price').value,
            discount: document.getElementById('discount').value
        }
        console.log(data);
        axios.post(`${url.devUrl}/staff/addService`, {data})
        .then(result => {
            console.log(result);
            window.location.reload();
        })
        .catch(err => console.log(err));
        

    }
    const availableServices = () => {
        axios.get(`${url.devUrl}/staff/availableServices`)
        .then(result => {
            ReactDOM.render(<Services data = {result.data}/>, document.getElementById('services'));
        })
        .catch(err => console.log(err));
    }
    const allGuests = () => {
        axios.get(`${url.devUrl}/staff/seeAllGuests`)
        .then(result => {
            ReactDOM.render(<Users data = {result.data}/>, document.getElementById('guests'));
        })
        .catch(err => console.log(err));
    }
    const logout = () => {
        localStorage.setItem('userId', '');
        localStorage.setItem('userName', '');
        history.push('/');
    }
    useEffect(() => {
        allGuests();
        availableServices();
    });
    return (
        <>
        <StaffNavbar/>
        <div class="card">
        <div class="container">
        logout: 
        <button onClick = {logout}>Logout</button>
        </div>
        </div>
        See All Services: <br/>
        <div id = 'services' class = 'guestServices'>
        </div><br/>
        Add service: <br/><br/>
        <div class = 'card'>
        name: <input type="text" id = "name" placeholder="name"/><br/><br/>
        desc: <input type="text" id = "desc" placeholder="description"/><br/><br/>
        price: <input type="number" id = "price" placeholder="price"/><br/><br/>
        discount: <input type="number" id = "discount" placeholder="discount"/><br/><br/>
        <button onClick = {add}>add service</button> <br/><br/>
        </div>
        See all guests:<br/><br/>
        <div id = 'guests' class = 'guestServices'></div><br/><br/>
        <div class = 'card'>
        click here to goback:<br></br>
        <button onClick = {() => window.history.back()}>go back</button>
        </div>
        </>
        
    );
}

export default Staff;