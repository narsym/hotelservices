import axios from "axios";
import {url} from './shared/url';
import {useHistory} from 'react-router-dom';

const Authenticate = () => {
    let history = useHistory();
    const login = () => {
        const data = {
            email: document.getElementsByName('lemail')[0].value,
            password: document.getElementsByName('lpassword')[0].value
        }
        axios.post(`${url.devUrl}/authentication/login`, {data})
        .then(result =>{
            console.log(result);
            localStorage.setItem('userId',result.data._id);
            localStorage.setItem('userName',result.data.name);
            if(result.data.role == 'guest') {
                history.push('/guest');
            }
            else if(result.data.role == 'staff'){
                history.push('/staff');
            } else {
                history.push('/A404');
            }
        })
        .catch(err => console.log(err));
    }

    const register = () => {
        var data = {
            name: document.getElementById('name').value,
            role: document.getElementById('role').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            phone: document.getElementById('phone').value
        }
        axios.post(`${url.devUrl}/authentication/register`, {data})
        .then(result => {
            localStorage.setItem('userId',result.data._id);
            localStorage.setItem('userName',result.data.name);
            if(result.data.role == 'guest') {
                history.push('/guest');
            }
            else {
                history.push('/staff');
            }
        })
        .catch(err => console.log(err));
    }
    return (
        
        <>
        
        <div class = 'authenticate'>
        <br></br>
        <div class="card">
        <div class="container">
        Login: <br/><br/><br/>
        email:<input type = 'text' name = 'lemail' placeholder="email"/><br/><br/><br/>
        password:<input type = 'text' name = 'lpassword' placeholder="password"/><br/><br/><br/>
        <button id = 'login' onClick = {login}> submit </button><br/><br/>
        </div>
        </div>
        
        <div class="card">
        <div class="container">
        Register: <br/><br/><br/>
        Role:<input type = 'text' id = 'role' placeholder="role"/><br/><br/><br/>
        name:<input type = 'text' id = 'name' placeholder="name"/><br/><br/><br/>
        email:<input type = 'text' id = 'email' placeholder="email"/><br/><br/><br/>
        password:<input type = 'text' id = 'password' placeholder="password"/><br/><br/><br/>
        phone no:<input type = 'text' id = 'phone' placeholder="phone no"/><br/><br/><br/>
        <button id = 'register' onClick = {register}> register </button>
        </div>
        </div>
        </div>
        <div class="card">
        <div class="container">
            <h3>use these to login or register</h3> 
            <h4>example guest: </h4> 
            <p>email: abc@gmail.com</p>
            <p>password: abc123</p>
            <h4>example staff: </h4> 
            <p>email: xyz@gmail.com</p>
            <p>password: xyz123</p>
        </div>
        </div>
        
        </>
    );
}

export default Authenticate;