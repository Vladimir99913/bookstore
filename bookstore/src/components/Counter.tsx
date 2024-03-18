interface CounterProps {
  count: number;
  handleClickIncrement: () => void;
  handleClickDecrement: () => void;
}

export function Counter(props: CounterProps) {
  return (
    <>
      <div>
        <button className="btn btn-danger" onClick={props.handleClickDecrement}>
          <i className="bi bi-dash-lg"></i>
        </button>
      </div>

      <h2>{props.count}</h2>
      <div>
        <button className="btn btn-success" onClick={props.handleClickIncrement}>
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
    </>
  );
}
