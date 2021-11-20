import React from 'react';
import { Component } from 'react';

class Child extends Component{
    render(){
        console.log("Props", this.props);
        return(
            <div>
            Hello {this.props.propBatch}, please take good care of yourself
            {/* {this.state.loadFormData 
                ? */}
                <div>
                <div>{this.props.propName}</div>
                <div>{this.props.propAge}</div>
                </div>
                {/* // :
                // null */}
            {/* // } */}
            </div>
            )
        }
    }
    
    export default Child