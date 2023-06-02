import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { AppContext } from './AppContext';
import { useContext } from 'react';

export default function ToastComponent() {

  const { showToast, setShowToast } = useContext(AppContext);

  return (
    <Row>
      <Col xs={6}>
        <Toast position='top-end' onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">PVS E-Commerce</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>Item Added to Cart!</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}