import { useState } from "react";
import { Button, Modal } from "react-bootstrap";


const Show = (props) => {
    // console.log(props.ds);
    const {title , image , description} = props.ds
  
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          detials
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={true}>
          <Modal.Header closeButton>
              <img className="w-50" src={image} alt="" />
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body> {description} </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default Show;