import {Link} from "react-router-dom"

function MyJob(){
    return (
        <>
            <h1>Esta es la página my job</h1>
            <ul>
                <li><Link to={`/home`}>Home</Link></li>
                <li><Link to={`/profile`}>Profile</Link></li>
            </ul>
        </>
    );   
}
export default MyJob;