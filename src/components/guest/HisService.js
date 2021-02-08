import axios from "axios";
import {url} from '../shared/url';
import {useState} from 'react';



const HisService = (props) => {
    const [val, setVal] = useState('booked');
    const update = () => {
        let data = {
            status: val,
            servid: props.data._id
        }
        axios.post(`${url.devUrl}/guest/updateStatus`, {data})
        .then(result => {
            console.log(result);
            window.location.reload();
        })
        .catch(err => console.log(err));
    }
    const change = (event) => {
        console.log(event.target.value);
        setVal(event.target.value);
    }
    return (
        <>
        <div className="card">
        <div className="container">
            <h4>User name: {localStorage.getItem('userName')}</h4>
            <h4>User Id: {props.data.custid}</h4>
            <h4>Service opted: {props.data.service}</h4>
            <p>Service status: {props.data.status}</p>
            Update Service Status:
            <select id="status" onChange = {change}>
            <option value="booked">booked</option>
            <option value="using">using</option>
            <option value="used">used</option>
            </select>
            <button onClick = {update}>update</button>
        </div>
        </div>
                
        </>
    );
}

export default HisService;