
function Post(props: any) { 
    return (
        <div key={props.key} className="post">
        <img src={props.img} className="App-logo" alt="logo" />
        <h1>{props.title} </h1>
        </div>
    )
}



export{Post}    