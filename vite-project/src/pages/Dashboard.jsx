import Contact from "../components/Contact"
import Navbar from "../components/Navbar"
import './Dashboard.css'

function Dashboard(){
    return(
        <div className="Dashboard">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="hero">
                <Contact/>
            </div>
        </div>
        
        
    )
}
export default Dashboard