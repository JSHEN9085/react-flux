import React from 'react'; 
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';

function App() {

    function getPage() {
        const route = window.location.pathname; 
        if(route === "/about") return <AboutPage/>; 
        if(route === "/") return <HomePage/>; 
        if(route === "/courses") return <CoursesPage/>;
    }

    return (
        <div className="container-fluid">
            <Header/>
            { getPage() } 
            {/* using {} to warp JavaScript inside JSX */}
        </div>
    )
}

export default App; 