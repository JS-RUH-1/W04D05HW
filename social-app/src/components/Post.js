import React from "react";

export const Post = () => {
  const arr = [
    {
      title: "Visca Barca",
      image:
        "https://static.turbosquid.com/Preview/2019/10/15__08_22_30/signature.jpgF69E6B71-AB2B-4A96-B53D-664FF1EC5287Large.jpg",
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

  return (
    <div className="posts">
      <br></br>
      {arr.map((e) => (
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col">
              <div className="card text-center">
                <div className="overflow">
                  <img className="card-img-top img-fluid" src={e.image} alt="" />
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title">{e.title}</h4>
                </div>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
