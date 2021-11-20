import{Button,Form} from 'react-bootstrap';


function PostComment(props:any){

return <> 


<Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea"  placeholder="comment goes in here" onChange={props.change} value={props.text} rows={3} />
  </Form.Group>
</Form>
<Button onClick={props.action} value={props.index} variant="info">Add Comment +</Button>


</>

}
export {PostComment}