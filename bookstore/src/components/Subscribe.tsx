import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { setSubscribe } from '../redux/subscribe-slice';

export function Subscribe() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();
  const usersmail = useAppSelector(state => state.subscribe.userEmail);

  function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleClickSubscribe(event: React.MouseEvent<HTMLFormElement>) {
    event.preventDefault();
    if (usersmail.length == 0) {
      dispatch(setSubscribe(email));
      setMessage('new');
    } else {
      if (!usersmail.includes(email)) {
        dispatch(setSubscribe(email));
        setMessage('new');
      } else {
        setMessage('old');
      }
    }
  }

  function renderMessage() {
    if (message == 'new') {
      return <p className="fw-semibold">You have subscribed to our updates</p>;
    }

    if (message == 'old') {
      return <p className="fw-semibold">You are already subscribed to our updates</p>;
    }
    return (
      <>
        <form className="input-group" onSubmit={handleClickSubscribe}>
          <input type="email" className="form-control" id="validationDefault02" placeholder="Username email" required value={email} onChange={handleChangeEmail} />
          <button className="btn btn-outline-secondary" type="submit" id="button-addon2">
            Subscribe
          </button>
        </form>
      </>
    );
  }

  return (
    <div className="wrapper-subscribe w-100 p-5 mb-5">
      <div className="mb-5">
        <h1>Subscribe to Newsletter</h1>
        <p className="fw-normal">Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>
      </div>
      {renderMessage()}
    </div>
  );
}
