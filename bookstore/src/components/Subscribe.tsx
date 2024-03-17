export function Subscribe() {
  return (
    <div className="w-100 p-5 mb-5" style={{ height: '300px', backgroundColor: '#F4EEFD' }}>
      <div className="mb-5">
        <h1>Subscribe to Newsletter</h1>
        <p>Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>
      </div>
      <div className="input-group input-group-lg">
        <input type="text" className="form-control" placeholder="Recipient's username" />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">
          Subscribe
        </button>
      </div>
    </div>
  );
}
