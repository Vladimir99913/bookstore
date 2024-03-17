interface CounterProps {
  count: number;
  handleClickIncrement: () => void;
  handleClickDecrement: () => void;
}

export function Counter(props: CounterProps) {
  return (
    <>
      <button className="btn btn-primary" onClick={props.handleClickDecrement}>
        -
      </button>
      <h2>{props.count}</h2>
      <button className="btn btn-warning" onClick={props.handleClickIncrement}>
        +
      </button>
    </>
  );
}
