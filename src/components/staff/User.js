

const User = (props) => {
    const details = () => {
        localStorage.setItem('userId', props.id);
        console.log(localStorage.getItem('userId'));
    }
    return (
        <>
        <div class="card">
        <div class="container">
        <h3>User name: {props.name}</h3>
        <h4>User email: {props.email}</h4>
        <h5>User phone number: {props.phone}</h5>
        <a href = '/userDetails' onClick = {details}><button>see more details</button></a>
        </div>
        </div>
        
        </>
    );
}

export default User;