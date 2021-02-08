import HisService from './HisService';
const HisServices = (props) => {
    
    return (
        <>{props.data.map((item, index) =>{
            return(
                <>
                <HisService key = {index} data = {item}/>
                </>
            );
        })}
        </>
    );
}

export default HisServices;