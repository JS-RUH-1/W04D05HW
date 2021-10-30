import React from "react";

export const Post = () => {
  const arr = [
    {
      title: "Visca Barca",
      image:
        "https://www.fcbarcelona.com/photo-resources/2021/08/09/276ad270-e5c6-453d-8d9f-212417ad7cb3/Camp-Nou-3.jpg?width=1200&height=750",
    },
    {
      title: "Best City EVER!!!",
      image:
        "https://www.arabianbusiness.com/public/styles/600px_600px_square/public/images/2020/01/26/18-Riyadh.jpg?itok=xOD5lWQk",
    },
    {
      title: "Good Morning",
      image:
        "https://i.pinimg.com/originals/84/2d/a4/842da4f794567681db4f79c617e8240c.jpg",
    },
  ];

  //   const [post, setpost] = useState('')

  return (
    <div>
      {arr.map((e) => (
        <div className="Post">
          <div className="Post-image-bg">
            <div className="Post-image">
              <div>
                <img src={e.image} alt="" />
              </div>
            </div>

            <div className="Post-caption">
              <strong> {e.title}</strong>
            </div>
          </div>
          <br></br>
        </div>
      ))}
    </div>
  );
};

// <div className='post'>
//       {arr.map((e) =>(
//           <div>
//           <p>{e.title}</p>
//           <img src={e.image} alt="" />
//           </div>
//       ))}
//       </div>
