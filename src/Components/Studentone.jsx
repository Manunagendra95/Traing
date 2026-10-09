import {useContext} from "react";
import StudentContext from "./StudentContext";

function Studentone(){
    const studentName = useContext(StudentContext);
    return (
        <div>
            <h2>Student Details</h2>
            <p>Name: {studentName}</p>
        </div>
    );
}
export default Studentone;