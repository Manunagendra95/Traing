import { useNavigate } from "react-router-dom";
import useCounter from "../Hooks/useCounter";


function Dashboard(){

    const navigate=useNavigate();
    
    

    function handleLogout(){
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
    }

    const{count,increment,decrement}=useCounter();

    return(
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to Dashboard</p>
            <button onClick={handleLogout}>Logout</button>
            <br/>
            <h2>Incerement and decrement Logic</h2>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Dashboard;