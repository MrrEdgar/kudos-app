import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function KudosModal(props) {
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
            <option value="1">Edgar Escobar</option>
            <option value="2">Fernanda Vega</option>
            <option value="3">Elizabeth Olsen</option>
          </select>
          <label htmlFor="floatingSelect">Who you are recognizing</label>
          {/* <div className='d-grid gap-2'>
            <ToggleButtonGroup type="checkbox" defaultValue={[]} className="mb-2 mt-3">
              <ToggleButton id="tbg-check-1" variant="outline-primary" value={1}>
                Thank you
              </ToggleButton>
              <ToggleButton id="tbg-check-2" variant="outline-primary" value={2}>
                Good job
              </ToggleButton>
              <ToggleButton id="tbg-check-3" variant="outline-primary" value={3}>
                You rock!
              </ToggleButton>
            </ToggleButtonGroup>
          </div> */}
          <div className="mb-3 mt-3">
            <label className="form-label">Writte something cool</label>
            <textarea className="form-control" rows="3" placeholder="You are a great team member ..."></textarea>
          </div>
        </div>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary">Close</Button>
        <Button onClick={props.onHide} variant="success" >Send Kudos!</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default KudosModal;