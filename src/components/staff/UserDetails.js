import axios from 'axios';
import {url} from '../shared/url';
import {useEffect} from 'react';
import ReactDOM from 'react-dom';
import HisServices from '../guest/HisServices';


const UserDetails = () => {
    
   const details = () => {
       let data = {
           id: localStorage.getItem('userId')
       };
        axios.post(`${url.devUrl}/staff/getGuestDetails`, {data})
        .then(result => {
            ReactDOM.render(<>
                <div class="card">
                <div class="container">
                <h3>{result.data.name}</h3>
                <h4>{result.data.email}</h4>
                <h4>{result.data.phone}</h4>
                <h4>{result.data.role}</h4>
                <p>{result.data._id}</p>
                <button onClick = {() => window.history.back()}> go back </button>
                </div>
                </div>
                
            </>,document.getElementById('div1'));      
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
    useEffect(() => {
        details();
        hisServices();
    });
    return (
        <>
            <div id = 'div1'></div>
            See All his Services: <br/>
            <div id = 'hisServices' class = 'guestServices'>
            </div><br/>
        </>
    );
}

export default UserDetails;