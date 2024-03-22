import { Modal } from './Modal';

interface ModalConfirmProps {
  shown: boolean;
  onHidden: () => void;
  handleClickDelteAll: () => void;
}

export function ModalConfirm(props: ModalConfirmProps) {
  return (
    <Modal shown={props.shown} onHidden={props.onHidden}>
      <div style={{ width: '400px', height: '250px' }}>
        <div className="d-flex justify-content-between">
          <h3 className=""> Confirm modal </h3>
          <button className="btn btn-lg my-auto" onClick={props.onHidden}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <hr />
        <p className="fs-4 fw-normal mb-5 text-center">You confirm your purchase?</p>
        <div className="w-100 d-flex justify-content-center">
          <button className="btn btn-success w-25 btn-lg m-3" onClick={props.handleClickDelteAll}>
            Yes
          </button>
          <button className="btn btn-danger w-25 btn-lg m-3" onClick={props.onHidden}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}
