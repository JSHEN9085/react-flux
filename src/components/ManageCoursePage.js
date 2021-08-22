import React, {useState} from 'react'; 
// import { Prompt } from 'react-router-dom'; 
import CourseForm from './CourseForm'; 

const ManageCoursePage = props => {
    console.log(props);
    const [course, setCourse] = useState({
        id: null, 
        slug: "",
        title: "",
        authorId: null,
        category: ""
    }) 

    function handleChange(event){
        // const updatedCourse = {...course}; don't directly mutate the state, make a copy first
        // updatedCourse.title = event.target.value;
        console.log(event.target.name);
        const updatedCourse = {...course, [event.target.name]: event.target.value}; 
        setCourse(updatedCourse); 
    }
    
    return (
        <>
        <h2>Manage Course</h2>
        {/* <Prompt when={true} message="Are you sure want to leave?"/> */}
        <CourseForm course={course} onChange={handleChange}/> 
        </>
    )
}

export default ManageCoursePage; 