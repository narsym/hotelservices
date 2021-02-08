import {useEffect} from 'react';

const Analytics = () => {
    return (
        <>
        <div class="card">
        <div class="container">
        <h3>{'Welcome user : '+localStorage.getItem('userName')}</h3>
        <h1> Analytics</h1>
        <button onClick = {() => window.history.back()}>go back</button>
        </div>
        </div>

        </>
    );
}

export default Analytics;