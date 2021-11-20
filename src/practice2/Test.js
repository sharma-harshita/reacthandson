import React from "react";

export default class Test extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }

    render(){
        console.log(this.props);
        return(
            <div>
                {this.props.data.name}
                {this.props.data.category}
            </div>
        )
    }
}