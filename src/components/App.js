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
        <Switch>
            <Route exact path = '/' component= {Authenticate}/>
            <Route exact path = '/staff' component= {Staff}/>
            <Route exact path = '/guest' component= {Guest}/>
            <Route exact path = '/analytics' component= {Analytics}/>
            <Route exact path = '/userDetails' component = {UserDetails}/>
            <Route path = '/A404' component = {A404}/>
        </Switch>
        </>
    );
}
export default App;