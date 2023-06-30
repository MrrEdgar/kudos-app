import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect, useRef } from 'react'

function KudosModal(props) {
  const API_URL = 'http://127.0.0.1:8000/api/'
  const [users, setUsers] = useState([])
  
  const message = useRef();
  const toUser = useRef();

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

  let handleSubmit = async (event) => {
    console.log("Clicked", toUser.current.value)
    event.preventDefault()
    try {
      let response = await fetch(API_URL+'kudos/', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors', 
        body: JSON.stringify({
          to_user_id: parseInt(toUser.current.value),
          from_user_id: props.user_id,
          message: message.current.value,
        }),
      });
      if (response.status === 201) {
        props.onHide;
        alert("Your kudo was sent, thank you.");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
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
        <form id="kudos-form" className="form-floating needs-validation" onSubmit={handleSubmit}>
          <select className="form-select" id="floatingSelect" name="user" ref={toUser} required>
            <option>Choose your co-worker</option>
            {users.map(user => (
              props.user_id !== user.id && <option key={user.id} value={user.id}>{user.fullname}</option>
            ))}
          </select>
          <label htmlFor="floatingSelect">Who you are recognizing</label>
          <div className="mb-3 mt-3">
            <label className="form-label">Writte something cool</label>
            <textarea id= "kudosMessage" className="form-control" rows="3" placeholder="You are a great team member ..." ref={message} required></textarea>
          </div>
        </form>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary">Close</Button>
        <Button type="submit" form="kudos-form" variant="success" >Send Kudos!</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default KudosModal;