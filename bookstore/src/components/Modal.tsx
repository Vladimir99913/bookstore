interface ModalProps {
  shown: boolean;
  onHidden: (shown: boolean) => void;
  children: React.ReactNode;
}

export function Modal(props: ModalProps) {
  function handleClickToggle() {
    props.onHidden(!props.shown);
  }

  return (
    <div className={props.shown ? 'modall active' : 'modall'} onClick={handleClickToggle}>
      <div className={props.shown ? 'modall-content active' : 'modall-content'} onClick={event => event.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
}
