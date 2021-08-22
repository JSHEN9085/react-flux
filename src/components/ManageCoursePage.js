import React, {useState, useEffect} from 'react'; 
// import { Prompt } from 'react-router-dom'; 
import CourseForm from './CourseForm'; 
import * as courseApi from "../api/courseApi"; 
import { toast } from "react-toastify"; 
import { NUMBER_UNARY_OPERATORS } from '@babel/types';

const ManageCoursePage = props => {
    // console.log(props);

    const [errors, setErrors] = useState({}); 

    const [course, setCourse] = useState({
        id: null, 
        slug: "",
        title: "",
        authorId: null,
        category: ""
    }) 

    useEffect( () => {
        const slug = props.match.params.slug; //obtain the path '/courses/:slug'
        if(slug){
            courseApi.getCourseBySlug(slug).then(_course => {
                setCourse(_course)
            })
        }
    }, [props.match.params.slug]) //if any dependencies listed here changed, then the effect will re-run

    function formIsValid() {
        const _errors = {}; 

        if(!course.title) _errors.title = "Title is required";
        if(!course.authorId) _errors.authorId = "Author is required"; 
        if(!course.category) _errors.category = "Category is required"; 

        setErrors(_errors); 
        return Object.keys(_errors).length === 0; 
    }

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
        if(!formIsValid()) return; 
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
            errors={errors}
        /> 
        </>
    )
}

export default ManageCoursePage; 