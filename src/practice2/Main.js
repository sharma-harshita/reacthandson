import React from 'react';
import Test from './Test';

class Main extends React.Component{
    render(){
         var category = "Bolly"

        var arr = [
            {id:1, name:"Stu1", category:"Bolly"},
            {id:2, name:"Stu11", category:"food"},
            {id:3, name:"Stu2", category:"Bolly"},
            {id:4, name:"Stu3", category:"food"},
            {id:5, name:"Stu4", category:"Bolly"},
            {id:6, name:"Stu5", category:"food"},
            {id:7, name:"Stu6", category:"food"},
            {id:8, name:"Stu7", category:"Bolly"},
            {id:9, name:"Stu8", category:"Bolly"}
        ]
        
        var newArr = arr.filter(value=>value.category===category);
        console.log(newArr);
        return(
            <div>
                <h1>{category}</h1>
                {newArr.map((value,index)=>{
                    console.log(value);
                    return(
                        <div key={index}>
                            <Test data={value}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Main