import React from 'react';

export default class Form2 extends React.Component{
    render(){
        return(
            <div>
            <h1>EMPLOYEE FEEDBACK DATA</h1>
            <div className="mainDiv">
            {this.props.users.map((value, index) => {
                return (
                    <div key={index} className="data">
                    <br/>
                    Name : {value.name} | Department : {value.contact} | Rating : {value.rating}
                    </div>
                    )
                })}
                </div>
                <br/>
                <button onClick={this.props.updateComponent}>Go Back</button>
                </div>
                )
            }
        }