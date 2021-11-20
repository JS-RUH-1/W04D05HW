
import { Button } from "react-bootstrap";
function Commnets(props:any){
return(
    <>
      <ul className="commnet">
        <li key={props.key}>{props.value} <Button onClick={props.delete} value={props.index} id={props.id} variant="danger">Delete</Button>
      </li>
      </ul>


    </>
)
}

export{Commnets}