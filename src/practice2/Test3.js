import React from 'react';

const articles = [
    {id: 1, title : "iPhone 13 launch"},
    {id: 2, title : "Vickat Wedding"},
    {id: 3, title : "PS5 release"},
    {id: 4, title : "Zomato - one woman ordered 13 ice cream in a day"},
    {id: 5, title : "Snowfall in Auli"}
]

function Test3 (){
    return(
        <div>
            {/* <h1>Title 1</h1>
            <h1>Title 2</h1>
            <h1>Title 3</h1>
            <h1>Title 4</h1>
            <h1>Title 5</h1>
            <h1>Title 6</h1> */}
            {articles.map((value, index)=>{
                return <h1>{value.title}</h1>
            })}
        </div>
    )
}

export default Test3