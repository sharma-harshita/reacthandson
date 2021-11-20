import React from 'react'
import Form2 from './Form2'
import '../react-2 handson/Form3.css';
import '../react-1 handson/Main.css';

class Form extends React.Component {
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
        const tempArray = [...this.state.users];
        tempArray.push({ name: this.state.name, contact: this.state.contact, rating: this.state.rating })
        this.setState({ users: tempArray, showComponent:true, name: "", contact: "" , rating: ""})
    }
    
    updateComponent = () =>{
        this.setState({showComponent:!this.state.showComponent})
    }

    render() {
        return (
            <div>
            {this.state.showComponent 
                ? 
                <Form2 users={this.state.users} updateComponent={this.updateComponent}/>
                : 
                <div className="formDiv">
                    <h1>EMPLOYEE FEEDBACK FORM</h1>
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
            }
            </div>
            )
        }
    }

export default Form