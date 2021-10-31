import React from "react";
import Post from "./post";
import Weather from "./weather";

const Home = () => {

    const allPosts = [
        {
            id: 1,
            image: 'https://images.pexels.com/photos/4790610/pexels-photo-4790610.jpeg',
            title: 'Title 1',
            comments: []
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/3062591/pexels-photo-3062591.jpeg',
            title: 'Title 2',
            comments: []
        },
        {
            id: 3,
            image: 'https://images.pexels.com/photos/2877180/pexels-photo-2877180.jpeg',
            title: 'Title 3',
            comments: []
        },
        {
            id: 4,
            image: 'https://images.pexels.com/photos/4668739/pexels-photo-4668739.jpeg',
            title: 'Title 4',
            comments: []
        },
        {
            id: 5,
            image: 'https://images.pexels.com/photos/3062627/pexels-photo-3062627.jpeg',
            title: 'Title 5',
            comments: []
        },
        {
            id: 6,
            image: 'https://images.pexels.com/photos/948406/pexels-photo-948406.jpeg',
            title: 'Title 6',
            comments: []
        },
        {
            id: 7,
            image: 'https://images.pexels.com/photos/4464488/pexels-photo-4464488.jpeg',
            title: 'Title 7',
            comments: []
        },
        {
            id: 8,
            image: 'https://images.pexels.com/photos/2353120/pexels-photo-2353120.jpeg',
            title: 'Title 8',
            comments: []
        },
        {
            id: 9,
            image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg',
            title: 'Title 9',
            comments: []
        },
        {
            id: 10,
            image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
            title: 'Title 10',
            comments: []
        },
        {
            id: 11,
            image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg',
            title: 'Title 11',
            comments: []
        },
        {
            id: 12,
            image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg',
            title: 'Title 12',
            comments: []
        }
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