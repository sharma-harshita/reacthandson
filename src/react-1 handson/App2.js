import React from 'react';
import '../App.css'

export default function App2() {
    return(
        <div className="comp comp1">
            <h1>This is created using functional Component</h1>
            <p className="hello">This is done using external CSS</p>
             <p style={ {color: 'blue'} }>
                This is done using inline CSS
             </p>
         </div>
    )
}