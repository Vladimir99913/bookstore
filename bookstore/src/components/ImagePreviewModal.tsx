import { useAppSelector } from '../hooks/hooks';
import { Modal } from './Modal';

interface ImagePreviewModalProps {
  shown: boolean;
  onHidden: () => void;
}

export function ImagePreviewModal(props: ImagePreviewModalProps) {
  const imageUrl = useAppSelector(state => state.modal.imageUrl);

  return (
    <Modal shown={props.shown} onHidden={props.onHidden}>
      <div className="image-preview" style={{ backgroundColor: '#FEE9E2' }}>
        <img src={imageUrl} alt="Book" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </Modal>
  );
}
