 import axios from 'axios';
 import React from 'react';
 




 export default class GetAxios extends React.Component {
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.get(`http://worldtimeapi.org/api/timezone/America/Argentina/Salta`)
        .then(res => {
            console.log(res.data.timezone)
            console.log(res.data.datetime)
            const persons = res.data;
          this.setState({ persons });
        })
    }

    render() {
      return (
        <>
         
        {/* {this.state.persons.map((person) => 
           <div> 
          <h4>{person.datetime}</h4>
          <h4>{person.timezone}</h4>
          </div>  )}  */}
        
          
        </>
      )
    }
  }







 

// export default class GetAxios extends React.Component{

// state={
//     times:[]
// } 
//     componentDidMount(){

//         axios.get(`http://worldtimeapi.org/api/timezone/America/Argentina/Salta`)
//         .then((res)=>{ 
            
//             console.log(res.data.utc_datetime)

//           const times=res.data ;
//           this.setState({times})

//         })
//          .catch(error=>console.log(error));
//     }
//     render(){
        
//       return(
    
//         <>
    
         
//     <ol>
//         {this.state.times.map(time =><li>{time.datetime}</li>)}
//     </ol>
//     {/* <button onClick={()=>setWord('Salta')}>Dubai</button> */}

//     {/* <button onClick={GetAxios}> Dubai</button> */}
     
//      {/* <div> 
//     { data.map((item)=>
    
//     <div className='bb'>
    
//       <h2>{item.datetime}</h2>
      
//     </div>
//     )} </div> */}
        
    
//         </>
//       )
    
//     }
//      }