import React, {Component} from "react"; 

export default class Course extends Component {
    render(){
        return (
            <tr>
                <td>{this.props.course.title}</td>
                <td>{this.props.course.authorId}</td>
                <td>{this.props.course.category}</td>
            </tr>
        )
    }
}