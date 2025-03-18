import {Link} from "react-router-dom"

function Home(){
    return (
        <>
            <h1>Esta es la página home</h1>
            <ul>
                <li><Link to={`/myjob`}>My Job</Link></li>
                <li><Link to={`/profile`}>Profile</Link></li>
            </ul>
        </>
    );   
}
export default Home;