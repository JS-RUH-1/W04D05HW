import React, { useEffect, useState } from 'react';
//const useEffect =React.useEffect

import './Post.css'



export default function Post(){

const [displayPost, setDisplayPost]= useState([

    {
        id:1,
        title:'Post one',
        img:'https://cdn.blossominggifts.com/media/catalog/product/cache/7/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/l/e/letter_box_candy_roses.jpg',
        com:'Nice'
    },
    {
        id:2,
        title:'post two',
        img:'https://images.squarespace-cdn.com/content/v1/59fe3088ccc5c51065e606ab/1603327690675-ZYZIK7P3WVMBVRUT5OSO/theposypostsep20205727.jpg?format=1000w',
        com:'Good'
    }
])
 
//This part make no change any of posts when make render
 useEffect(()=>{
     if(localStorage.getItem('ExamplePostData')){
         setDisplayPost(JSON.parse(localStorage.getItem('ExamplePostData')))
     }
 },[])   

useEffect(()=>{

 localStorage.setItem('ExamplePostData',JSON.stringify(displayPost))

},[displayPost])

return(
  
   <>  
  
<AddPostForm setDisplayPost={setDisplayPost}/>
<ol> 
 <Pos/>

</ol>
 

</>
);
 function Pos(){

    //Delete A Post..
    function handleDelete(id){
  const del=displayPost.filter((post)=>post.id !== id);
  setDisplayPost(del)
    }

    const [isEditing, setIsediting]=useState(false);
    const [currentComment, setCurrentComment]=useState({})

    function handleEditInputChange(e){

        setCurrentComment({...currentComment,com:e.target.value});
    }

function handleEditClick(post){
    setIsediting(true);
    setCurrentComment({...post})
}

function handleUpdateComment(id, updateComment){

    const updateObject=displayPost.map((post)=>

    post.id===id ? updateComment:post );
    setIsediting(false);

    setDisplayPost(updateObject)
}

function handleEditFromSubmit(e){

    e.preventDefault();
    handleUpdateComment(currentComment.id ,currentComment)
}

     return(
         <>
<div class='po'> 

        {displayPost.map((post)=>(
         
        <div class='post' >
           <ol>
              {/* {post.id} */}
           <h4>  {post.title}</h4>
           <img src= {post.img} className='Aimg' alt ='' width={150} height={150}/>  
           <br/>
          <p className='fo'> {post.com}</p>
            <button className='Rbtn' onClick={()=>handleDelete(post.id)} >Remove Post</button>
            

{/* Update part */}
<div className="comment">
         {/* start edit form */}
{currentComment.id && isEditing && (
    <form onSubmit={handleEditFromSubmit}  >

<input className="newInput" name="Edit" type="text" placeholder="Edit Comment"
value={currentComment.com}
onChange={handleEditInputChange}/>

<button className='ubtn' type="submit">Update</button>
<button className='Rbtn' onClick={()=>setIsediting(false)}>Cancel</button>
    </form>
)}

{/* end edit f orm */}


         </div>
{/* Update part */}


            {!isEditing && (
                 <button className='Ebtn' onClick={()=>handleEditClick(post)} >
                 Edit comment
                 </button>
           )}
          </ol>
          </div> 
           
        ))}
        
        
       </div>

         </>
     )
 }
 


function AddPostForm(props){

    const [title,setTitle]=useState()
    const [image,setImage]=useState()
    const [comment ,setComment]=useState()
 
function handleSubmit(e){
e.preventDefault()

props.setDisplayPost(prev => prev.concat({id:Date.now() ,title:title, img:image,com:comment}))
setTitle('')
setImage('')
setComment('')
 
alert('you add new post form')
}

    return(
        <>

<form onSubmit={handleSubmit} className='AddForm'>
<field>
<newPost>Add New Post .</newPost>
<br/>
<input className='newInput' value={title} onChange={e => setTitle(e.target.value)} placeholder="The Title of Post."/>
<br/>
<input  className='newInput'value={image} onChange={e => setImage(e.target.value)} placeholder="The Link of Post."/>

<br/>
<input className='newInput' value={comment} onChange={e => setComment(e.target.value)} placeholder="Comment for Post."/>
<br/>
<button className='Addbtn'>Add Post</button>

</field>
</form>
        </>
    )
}

}