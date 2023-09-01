import React from 'react'

const Filter4 = () => {
    let arr = [2, 4, 6, 3, 10, 12]
  return (
    <div>
       <h1>Multiplication of numbers are as under: </h1> 
    { 
            arr.filter((value)=> 
                { 
                    if(value==3){
                        return <h2>HI</h2> 
                    }
                   
                     
                    else{
                        return <h2>Hhello</h2> 
                    }
                    
                }) 
    } 

    </div>
  )
}

export default Filter4
