
import Service from './Service';

const Services = (props) => {
    
    return (
        <>{props.data.map((item, index) =>{
            return(
                <Service key = {index} data = {item}/>
            );
        })}
        </>
    );
}

export default Services;