import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react'

function KudosModal(props) {
  const API_URL = 'http://127.0.0.1:8000/api/'
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUserData = async () => {
      try{
        const response = await fetch(API_URL+'users/');
        const data = await response.json();
        setUsers(data)
      } catch (error){
        console.error('Error :(')
      }
    }
    (async () => await fetchUserData())();
  }, []);

  let jsonData={
    'from_user' : 1,
    'to_user': 3,
    'message': 'Hello you are awesome'
  }

  function handleClick(event) {
    fetch(API_URL+'kudos/', { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors', 
      body: JSON.stringify(jsonData)
    })
    props.onHide
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Recognize
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-floating">
          <select className="form-select" id="floatingSelect">
            <option defaultValue>Choose your co-worker</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.fullname}</option>
            ))}
          </select>
          <label htmlFor="floatingSelect">Who you are recognizing</label>
          <div className="mb-3 mt-3">
            <label className="form-label">Writte something cool</label>
            <textarea id= "kudosMessage" className="form-control" rows="3" placeholder="You are a great team member ..."></textarea>
          </div>
        </div>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary">Close</Button>
        <Button onClick={handleClick} variant="success" >Send Kudos!</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default KudosModal;