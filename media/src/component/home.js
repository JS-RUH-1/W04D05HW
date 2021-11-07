import React from "react";
import Post from "./posts";
import Weather from "./weather";

const Home = () => {

    const allPosts = [
        {
            id: 1,
            image: 'https://www.adobe.com/express/feature/design/media_1c07883d2f5c131ae34b7af2d934bdff930f19d94.jpeg?width=2000&format=webply&optimize=medium',
            title: 'Title 1',
            comments: []
        },
        {
            id: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBSdCy_NomRF8ShG4SHEyCjphC79oGo29wNdKLnyEeJi2lX2CNIXfJdp6t-YDI8xav6Y&usqp=CAU',
            title: 'Title 2',
            comments: []
        },
        {
            id: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOq4IyD4Xx0O_9fRP9wrseiwOT6BSLLLshzlg9Wnm7trtdM7b2-4h10X3rsBc4LkpHxjY&usqp=CAU',
            title: 'Title 3',
            comments: []
        },
        {
            id: 4,
            image: 'https://crello-wordpress.s3.eu-west-1.amazonaws.com/create/wp-content/uploads/2021/03/instagram-posts-supernew.png',
            title: 'Title 4',
            comments: []
        },
        
    ] 


    return ( 
        <div className="home">
            <div className="postsSide">
                {allPosts.map((po, index) => (
                    <Post post={po} key={index} />
                ))}
            </div>



            <div className="weatherSide">
                <Weather />
            </div>
        </div>
     );
}

export default Home;