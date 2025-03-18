import {Link} from "react-router-dom"

function Profile(){
    return (
        <>
            <h1>Esta es la página profile</h1>
            <ul>
                <li><Link to={`/home`}>Home</Link></li>
                <li><Link to={`/myjob`}>My Job</Link></li>
            </ul>
        </>
    );   
}
export default Profile;