import React from 'react'; 
import { Prompt } from 'react-router-dom'; 

const ManageCoursePage = props => {
    console.log(props);
    return (
        <>
        <h2>Manage Course</h2>
        <Prompt when={true} message="Are you sure want to leave?"/>
        {props.match.params.slug}; 
        </>
    )
}

export default ManageCoursePage; 