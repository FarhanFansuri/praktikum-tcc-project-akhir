import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import {useState} from 'react'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ApiData from '../config/ApiData';


function FormPost() {

  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  return (
    <Container className="mb-4">
    <Card>
    <Card.Header>Buat Postingan</Card.Header>
    <Card.Body>
    <Form>
        <Form.Group className="mb-3" >
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Masukan Judul" onChange={(e)=>{
              setTitle(e.target.value)
            }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Masukan tulisan blog anda</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={(e)=>{
              setContent(e.target.value)
            }} />
        </Form.Group>
        <button className='btn btn-danger text-white' onClick={(e)=>{
          e.preventDefault()
          ApiData.postData(title,content)
        }}>Post</button>
        </Form>
        </Card.Body>
    </Card>
    </Container>
   
  );
}

export default FormPost;