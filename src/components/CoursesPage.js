import React from "react"; 
import { getCourses } from "../api/courseApi"; 

class CoursesPage extends React.Component {
    //with constructor 
    // constructor(props) {
    //     super(props); 

    //     this.state = {
    //         courses: []
    //     }; 
    // }

    state = {
        courses: []
    }; 

    componentDidMount() {
        getCourses()
    }

    render() {
        return (
            <h2>Courses</h2>
        )
    }
}

export default CoursesPage; 