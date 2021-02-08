import axios from 'axios';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {url} from '../shared/url';
import HisServices from './HisServices';
import Services from './Services';
import GuestNavbar from '../GuestNavbar';
import {useHistory} from 'react-router-dom';



const Guest = () => {
    let history = useHistory();
    const displayServices = () => {
        axios.get(`${url.devUrl}/guest/seeServices`)
        .then(result => {
            ReactDOM.render(<Services data = {result.data}/>, document.getElementById('services'));
            
        })
        .catch(err => console.log(err));
    }
    const hisServices = () => {
        let data = {
            custid: localStorage.getItem('userId')
        }
        axios.post(`${url.devUrl}/guest/seeUsingServices`, {data})
        .then(result => {
            ReactDOM.render(<HisServices data = {result.data}/>, document.getElementById('hisServices'));
            
        })
        .catch(err => console.log(err));
    }
    const checkout = () => {
        let data = {
            custid: localStorage.getItem('userId')
        }
        axios.post(`${url.devUrl}/guest/checkout`, {data})
        .then(result => {
            document.getElementById('checkout').innerHTML = `The bill to be paid: ${result.data.cost}`;
        })
    }
    const logout = () => {
        localStorage.setItem('userId', '');
        localStorage.setItem('userName', '');
        history.push('/');
    }
    useEffect(() => {
        displayServices();
        hisServices();
        checkout();
    });
    return (
        <>
        <GuestNavbar/>
        <div class="card">
        <div class="container">
        logout: 
        <button onClick = {logout}>Logout</button>
        </div>
        </div>
        
        Checkout:
        <div id = 'checkout' class = 'card'>
        </div><br/>
        See All Services: <br/>
        <div id = 'services' class = 'guestServices'>
        </div><br/>
        See All his Services: <br/>
        <div id = 'hisServices' class = 'guestServices'>
        </div><br/>
        </>
    );
}

export default Guest;