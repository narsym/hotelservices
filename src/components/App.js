import Authenticate from './Authenticate';
import Analytics from './Analytics';
import Staff from './staff/Staff';
import Guest from './guest/Guest';
import A404 from './A404';
import {Route, Switch} from 'react-router-dom';
import UserDetails from './staff/UserDetails';

const App = () => {
    return (
        <>
        <Authenticate/>
        </>
    );
}
export default App;