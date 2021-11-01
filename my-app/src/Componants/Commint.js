import { useState } from 'react';
import Button from 'react-bootstrap/Button';

let comm = document.getElementById('commint');


function Commint() {
	const [ Commint, setCommint ] = useState([]);

	function commint(e) {
		e.preventDefault();
        let commentArray = [];
        commentArray=Commint.slice()
        commentArray.push(e.target[0].value)
		setCommint(commentArray);
		console.log(Commint);
	}

	function remove(index) {
		let removeArray = [];
        removeArray = Commint.slice()
        removeArray.splice(index,1)
        setCommint (removeArray)
	}

	//

	return (
		<div>
			<form onSubmit={commint}>
				<textarea />
				<button type="submit">coint</button>
			</form>
			{Commint.map((e,key)=>{
                return(

                    <div>
                    <h6>{e}</h6>
                    <button onClick={()=>remove(key)}>Clear Comment</button>
                    </div>
                )
                
               
            })}
           

			
		</div>
	);
}
export default Commint;
