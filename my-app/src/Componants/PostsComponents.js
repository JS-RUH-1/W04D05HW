import {useState,useEffect} from "react";
import Commint from "./Commint";
import NavBar from "./NavBar";
const axios = require('axios');


// import  img "..img/" 
// let showWeather;
function PostsComponents(){
    
    
    
    
    const [city , setCity] = useState("Riyadh")
    const [Time , setTime] = useState()
    // let a = {Time}
   
    
    
    let cites = [
        {
            id:1,
            title:"Kuwait",
            img:'https://vid.alarabiya.net/images/2020/01/12/629fff3a-98e5-4565-ae09-24157f74b075/629fff3a-98e5-4565-ae09-24157f74b075_16x9_1200x676.jpg?width=1138 '
        },
        {
            id:2,
            title:"Riyadh",
            img:'https://www.travelsafe-abroad.com/wp-content/uploads/568355.jpg'
        },
        {
            id:3,
            title:"Dubai",
            img:'http://prod-upp-image-read.ft.com/cfe2a6de-4127-11ea-a879-e56a76ed3e8a'
        },
        {
            id:4,
            title:"Tokyo",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6po1orob7hD0QDgJdHl6astUZvgIWJqhNRF0wKvx1okL2HE6wf1i0nswBYBnlEsUtTM8&usqp=CAU'
        },
        {
        id:5,
        title:"Seoul",
        img:'https://cdn.theatlantic.com/thumbor/k-ioBN9uAnPiU5iIQ1p0Tgd4scg=/0x0:2500x1406/960x540/media/img/mt/2021/06/GettyImages_1233703218/original.jpg'
        }
  ]

   
    // useEffect(() => {
    //     setInterval(()=>{
    //         axios
    //         .get( `http://worldtimeapi.org/api/timezone/Asia/${city}`)
    //         .then((response)=>{console.log(response)
                
                
    //             // console.log(response);
    //             let ab = response.data.datetime
    //             let arr=[]
    //             console.log(ab);
    //             arr = ab.split('T')
    //             let arr2 = arr[1].split('.')
    //             setTime(arr2[0]) 
                
    //            }
    //             )
    
    //         .catch(e => console.log(e))

    //     },1000)
       

    // },[city]);
    
    // console.log({time});
   
  
    

    // function time() {
    //     let ab = {Time}.Time;
    //     let arr=[]
    //     console.log(ab);

    //     arr = ab.split('T')
    //    let arr2 = arr[1].split('.')
        
    //     console.log(arr2[0]);
    //     return  arr2[0]
        
    // } 
    return (
        
        <div >
  
        <h1>{Time}</h1>
        

       
        <select  onChange={(e)=>{
             setCity (e.target.value);
        
            }} >

            <option value ="Riyadh" >Riyadh</option>
            <option value ="Dubai">Dubai</option>
            <option value ="Kuwait">Kuwait</option>
            <option value ="Tokyo">Tokyo</option>
            <option value ="Seoul">Seoul</option>


        </select>
        
            
            
            
        
        <div id = "main">
        {cites.map((e)=>{
            return(
                <div >
                
                <h1>{e.title}</h1>
                
                <img src={e.img}width={350}height={350}style={{borderRadius:20} } />

                <Commint></Commint>
                
                </div>
    
            )
        })}
    
        
            
        </div>
        </div>
    );

    
}
export default PostsComponents

