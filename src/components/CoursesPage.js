import React, { useState, useEffect } from "react"; 
// import { getCourses } from "../api/courseApi"; 
import courseStore from '../stores/courseStore'; 
import CourseList from "./CourseList"; 
import { Link } from 'react-router-dom'; 

//class component
// class CoursesPage extends Component {
//     //with constructor 
//     // constructor(props) {
//     //     super(props); 

//     //     this.state = {
//     //         courses: []
//     //     }; 
//     // }

//     state = {
//         courses: []
//     }; 

//     componentDidMount() {
//         getCourses().then(data => this.setState( {courses: data}, () => console.log(this.state)))
//     }

//     render() {
//         return (
//             <>
//             <h2>Courses</h2>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Author ID</th>
//                         <th>Category</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {this.state.courses.map(course => {
//                        return(
//                         <tr key={course.id}>
//                             <td>{course.title}</td>
//                             <td>{course.authorId}</td>
//                             <td>{course.category}</td>
//                         </tr>)})}
//                 </tbody>
                
//             </table>
//             </>
//         )
//     }
// }

//functional component
function CoursesPage() {
    //declare state here
    const [ courses, setCourses] = useState( [] ); 
    //first variable inside "courses" is the name of our state
    //second variable "setCourses" is the setter method to change the state
    //inside "useState", it initialize our state which is courses as an empty []

    useEffect( () => {
        setCourses(courseStore.getCourses())
    }, []) //"[]" here means this function only run once

    return (
        <>
            <h2>Courses</h2>
            <Link className="btn btn-primary" to="/course">
                Add course
            </Link>
            <CourseList courses={courses}/>
        </>
    )
    
}

export default CoursesPage; 

