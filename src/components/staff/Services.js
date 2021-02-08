import Service from './Service';
const Services = (props) => {
    return (
        <>
        {props.data.map((item, index) => {
            return <Service key = {index}
            name = {item.name}
            desc = {item.desc}
            img = {item.img}
            price = {item.price}
            discount = {item.discount}/>
        })}
        </>
    );
}

export default Services;