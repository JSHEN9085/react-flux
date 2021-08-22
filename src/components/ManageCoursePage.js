import React, {useState} from 'react'; 
// import { Prompt } from 'react-router-dom'; 
import CourseForm from './CourseForm'; 
import * as courseApi from "../api/courseApi"; 
import { toast } from "react-toastify"; 

const ManageCoursePage = props => {
    // console.log(props);
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
        // console.log(event.target.name);
        const updatedCourse = {...course, [event.target.name]: event.target.value}; 
        setCourse(updatedCourse); 
    }

    function handleSubmit(event){     
        console.log(event)   
        event.preventDefault(); 
        courseApi.saveCourse(course).then( () => {
            props.history.push("/courses");
            toast.success('Course saved.'); 
        });         
    }
    
    return (
        <>
        <h2>Manage Course</h2>
        {/* <Prompt when={true} message="Are you sure want to leave?"/> */}
        <CourseForm 
            course={course} 
            onChange={handleChange} 
            onSubmit={handleSubmit}
        /> 
        </>
    )
}

export default ManageCoursePage; 