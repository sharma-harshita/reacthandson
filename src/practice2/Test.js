import React from "react";

export default class Test extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }

    render(){
        let langs = ["Ruby","ES6","Scala"]
          return (<div>
            {langs.map(it => <p>{it}</p>)}
          </div>)
      }
}