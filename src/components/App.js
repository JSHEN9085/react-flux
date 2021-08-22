import React from 'react'; 
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';
import { Route, Switch, Redirect } from 'react-router-dom'; 
import NotFoundPage from './NotFoundPage';
import ManageCoursePage from './ManageCoursePage';
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

function App() {



    return (
        <div className="container-fluid">
            <ToastContainer autoclose={2000} hideProgressBar/> 
            <Header/>
            <Switch>
            <Route path="/" exact component={HomePage}/> 
            <Route path="/courses" component={CoursesPage}/> 
            <Route path="/about" component={AboutPage}/>
            <Route path="/course/:slug" component={ManageCoursePage}/>
            <Route path="/course" component={ManageCoursePage}/>
            <Redirect from="/about-page" to="/about"/>
            <Route component={NotFoundPage}/> 
            {/* Route allows multipul match, without keywork exact, other 2 components will also render home page as the route contain "/" */}
            {/* using {} to warp JavaScript inside JSX */}
            </Switch>
            {/* Switch will scan all route, once it fonud the route, it stopped scaning, so always put page not found at the very end */}
        </div>
    )   
}

export default App; 