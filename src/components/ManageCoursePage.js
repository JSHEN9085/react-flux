import React, {useState, useEffect} from 'react'; 
// import { Prompt } from 'react-router-dom'; 
import CourseForm from './CourseForm'; 
// import * as courseApi from "../api/courseApi";
import courseStore from '../stores/courseStore';
import * as courseActions from '../actions/courseActions'; 
import { toast } from "react-toastify"; 

const ManageCoursePage = props => {
    // console.log(props);

    const [errors, setErrors] = useState({}); 
    const [courses, setCourses] = useState(courseStore.getCourses());
    const [course, setCourse] = useState({
        id: null, 
        slug: "",
        title: "",
        authorId: null,
        category: ""
    }) 

    useEffect( () => {
        courseStore.addChangeListener(onChange); 
        const slug = props.match.params.slug; //obtain the path '/courses/:slug'
        if(courses.length === 0){
            courseActions.loadCourses(); 
        } else if(slug){
            setCourse(courseStore.getCourseBySlug(slug))
        }
        return () => courseStore.removeChangeListener(onChange); 
    }, [courses.length, props.match.params.slug]) //if any dependencies listed here changed, then the effect will re-run

    function onChange() {
        setCourses(courseStore.getCourses()); 
    }

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
        courseActions.saveCourse(course).then( () => {
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