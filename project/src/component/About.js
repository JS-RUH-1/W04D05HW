import React from 'react';
import './About.css'
 
export default function About(){

return(
    <>

<div className='box'> 
 <h1 className='header'>About us..</h1>

 
<p className='content'>This website show many posts, 
You can add a new post,
 and under each post, as you see,
you can update your comment or remove your post. </p>


{/* <ol>

   {family.map(fml=> <Name  key= {fml.id} name = {fml.name} age={fml.age}/>)}
   
    </ol> */}
    
</div>

      
     </>
);
}

// const family =[

//     {id:1, name:'Aljowhara' ,age:40},
//     {id:2, name:'Fahad',age:45},
//     {id:3, name:'Shahad' ,age:25},
//     {id:4, name:'Fato',age:24},
//     {id:5, name:"Almunther" ,age:22},
//     {id:6, name:'Renad',age:17},
//     {id:7, name:'Saleh',age:14},
//     {id:8, name:'Noni',age:7}
// ]


// function Name(props){

//     return (<li className='city'>name is {props.name} her age is {props.age}.</li>);
//    }

