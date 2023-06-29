import { useState } from "react";
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import KudosModal from "./KudosModal";

function Home() {
const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">Hello, Edgar Escobar</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            In this simple app you can recognize someone else in your
            organization with kudos. You can also view yours and your team kudos
            to support them.
          </p>
          <p>
            You have <code>3 KUDOS</code> left for this week.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              onClick={() => setModalShow(true)}
            >
              Recognize someone
            </Button>
            <Link to="/dashboard">
                <button
                type="button" className="btn btn-outline-secondary btn-lg px-4">
                Kudos dashboard
                </button>
            </Link>
          </div>
        </div>
      </div>

      <KudosModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Home;
