import User from "./User";

const Users = (props) => {
    return (
        <>
        {props.data.map((item, index) => {
            return <User key = {index}
                name = {item.name}
                email = {item.email}
                phone = {item.phone}
                id = {item._id}
            />
        })}
        </>
    );
}

export default Users;