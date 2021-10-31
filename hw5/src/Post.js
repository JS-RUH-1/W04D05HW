import { useState } from 'react';
import * as Bootstrap from 'react-bootstrap';
import './App.css';
import Comments from './Comments'



function Post() {
  let _defaultArray = [

    {
      title:'Post1',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6U21R7Jo6mpmVJsX3mPsuRXLyj9Y4HHXhnQ&usqp=CAU'  },
    {
      title:'Post2',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxWmkdsUjwHwayPLZbG9ncuK7JOqv_RXnSkQ&usqp=CAU',
     },
    {
      title:'Post3',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3A5zKm4DOkLgdhK7h0SLWdCgG3R1en_Fh1Q&usqp=CAU',
    },
   {
    title:'Post4',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1KV2RTg4UPBZffMFhRxW5gDfzh4upALDyzw&usqp=CAU',
   }
  
  
  
  ];
  const [postsArray, updatePostsArray] = useState(_defaultArray)
  
  return (
      <div className="Post">

      {postsArray.map((elemnt) => {
        return (
          <div>
          <Bootstrap.Card style={{ width: '20rem', padding: '5px', margin: '50px'}}>
          <Bootstrap.Card.Img style={{ width: '300px', height: '300px' }} variant="top" src={elemnt.img} />
          <Bootstrap.Card.Body>
          <Bootstrap.Card.Title>{elemnt.title}</Bootstrap.Card.Title>

          <Comments></Comments>
          </Bootstrap.Card.Body>
          </Bootstrap.Card>
          </div>
        )
        

      })}
      </div>
    );
  }
  
  export default Post;