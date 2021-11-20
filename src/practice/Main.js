import React from 'react';
import { Component } from 'react';
import Comp2 from './Comp2';
import Comp3 from './Comp3';
import Comp1 from './Comp1';
import Child from './Child';

class Main extends Component{
    state = {
        batch : "Elevation Students",
        loadComp2 : false,
        loadComp3 : false,
        name:"",
        age:"",
        loadFormData:false,
        obj1:{name:"Prashant", age: 24},
        obj2:{prevCompany:"Airtel", yrOfExp: 2}
    }
    toggleComponent = () => {
        this.setState({loadComp2:!this.state.loadComp2})
    }
    toggleComponent2 = () => {
        this.setState({loadComp3:!this.state.loadComp3})
    }
    
    handleChange = (event) => {
        this.setState({[event.target.id]:event.target.value})
    }
    
    handleSubmit = (event) =>{
        event.preventDefault()
        this.setState({loadFormData:true})
        // console.log("State", this.state);
        const completeDetails = {
            ...this.state.obj1,
            ...this.state.obj2
        }
        console.log(completeDetails);

    }
    render(){
        return(
            <div>
            Main Component
            {/* Statte variable value : <p>{this.state.loadComp2.toString()}</p> */}
            <br/>
            {this.state.loadComp2===true || this.state.loadComp3===true
                ?
                <div>
                {this.state.loadComp2 === true 
                    ?
                    <Comp2/>
                    :
                    <Comp3/>
                }
                </div>
                :
                <div><Comp1/></div>
            }
            <button onClick={this.toggleComponent}>Click to load Component2</button>
            <button onClick={this.toggleComponent2}>Click to load Componen3</button>
            
            <form>
            <input type="text" id="name" value={this.state.name} onChange={this.handleChange}/>
            <input type="number" id="age" value={this.state.age} onChange={this.handleChange}/>
            <input type = "submit" onClick={this.handleSubmit}/>
            </form>
            {this.state.loadFormData 
                ?
                <Child propBatch = {this.state.batch} propName = {this.state.name} propAge = {this.state.age}/>
                :
                null
            }
           
            </div>
            )
        }
    }
    
    export default Main;