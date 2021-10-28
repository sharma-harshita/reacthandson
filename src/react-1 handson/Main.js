import React from "react";
import App2 from "./App2";
import App4 from "./App4";
import './Main.css';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showFunctionalComponent:false,
            showClassComponent:false
        }
    }
    loadFunctional = ()=> {
        this.setState({showFunctionalComponent:!this.state.showFunctionalComponent})
    }
    loadClass= ()=> {
        this.setState({showClassComponent:!this.state.showClassComponent})
    }
    render(){
        return(
            <div className="main">
            <h1 className="heading"> Styling using Functional and Class Component </h1>
            <button className="button button1" onClick={this.loadFunctional}>To see styling in functional component</button>
            <button className="button button2" onClick={this.loadClass}>To see styling in class component</button>
            <div style={{display:"flex"}}>
            {this.state.showFunctionalComponent ?
                <App2 /> :
                null
            }
            {this.state.showClassComponent ?
                <App4 /> :
                null
            }
            </div>  
            </div>
            )
        }
    } 
    
    export default Main