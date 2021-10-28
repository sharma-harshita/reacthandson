import React from 'react'
import '../react-1 handson/Main.css'
import './Form3.css';

class Form3 extends React.Component {
    state = {
        name: "",
        contact: "",
        rating:"",
        users: [],
        showComponent:false
    }
    
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        const tempArray = [...this.state.users]
        tempArray.push({ name: this.state.name, contact: this.state.contact, rating: this.state.rating })
        this.setState({ users: tempArray, showComponent:true, name: "", contact: "" , rating: ""})
    }
    
    render() {
        return (
            <div >
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <div className="formDiv">
            <form onSubmit={this.handleSubmit}>
            <label className="label">Name :</label> 
            <input value={this.state.name} id="name" onChange={this.handleChange} />
            <br/>
            <br/>
            <label>Department :</label> 
            <input value={this.state.contact} id="contact" onChange={this.handleChange} />
            <br/>
            <br/>
            <label>Rating :</label> 
            <input value={this.state.rating} id="rating" onChange={this.handleChange} />
            <br/>
            <br/>
            <button className="button1" style={{fontSize:"25px"}}>Submit</button>
            </form>
            </div>
            <div className="mainDiv">
            {this.state.users.map((value, index) => {
                return (
                    <div key={index} className="data">
                    <br/>
                    Name : {value.name} | Department : {value.contact} | Rating : {value.rating}
                    </div>
                    )
            })}
            </div>
                </div>
                )
            }
        }
        
        export default Form3