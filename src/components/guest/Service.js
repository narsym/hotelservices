import axios from "axios";
import {url} from "../shared/url";


const Service = (props) => {
    const buy = () => {
        console.log('hi')
        let data = {
            custid: localStorage.getItem('userId'),
            service: props.data.name,
            status: "booked",
            cost: props.data.price,
            rating: 0
        }
        axios.post(`${url.devUrl}/guest/buyService`, {data})
        .then(result => {
            window.location.reload();
        })
        .catch(err => console.log(err));
        
    }
    return (
            <>
            <div class="card">
            <div class="container">
            <h3>Service Name: {props.data.name}</h3>
            <h5>Description: {props.data.desc}</h5>
            <p>Price: {props.data.price}</p>
            <p>Discount: {props.data.discount}</p>
            <button onClick = {buy}>Buy</button>
            </div>
            </div>
            
            </>
    );
}

export default Service;