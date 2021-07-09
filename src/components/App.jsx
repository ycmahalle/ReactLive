import React, {useEffect} from "react";
import { Switch , Route ,Redirect } from "react-router-dom"; 
import Aos from "aos";
import "../../node_modules/aos/dist/aos.css"; 
import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../css/style.css";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact"; 
import Services from "./pages/Services";
import About from "./pages/About";
import Footer from "./pages/Footer";
const App=()=>{
    useEffect(() => {
       Aos.init({duration:1500});
     }, []);
    return (
        <>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/about" component={About}/>

                    {/* <Redirect to="/"/> */}
                </Switch>
                <br/><br/><br/>
                <Footer/>       
            </div> 
        </>
    );
} 
export default App;