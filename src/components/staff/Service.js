
const Service = (props) => {
    return (
        <>
            <div class="card">
            <div class="container">
            <h3>Service name: {props.name}</h3>
            <h5>Service description: {props.desc}</h5>
            <p>Service price: {props.price}</p>
            <p>Service discount: {props.discount}</p>
            </div>
            </div>
            
        </>
    );
}

export default Service;