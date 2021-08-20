import React from 'react'; 

//class component
class AboutPage extends React.Component {
    render() {
        return (
        //without a div tag, we will have this error: Adjacent JSX elements must be wrapped in an enclosing tag
        //but sometime we don't want additional <div/> as it might impact our CSS
        // <div>
            // <h2>About</h2>
            // <p>This app uses React.</p>
        // </div>

        //instead, we use fragment
        <React.Fragment>
            <h2>About</h2>
            <p>This app uses React.</p>
        </React.Fragment>
        )
    }
}

export default AboutPage; 