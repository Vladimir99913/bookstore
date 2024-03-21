interface TitleProps {
  title: string;
}

export function Title(props: TitleProps) {
  return (
    <div className="container-sm d-flex flex-column w-100" style={{ marginBottom: '50px' }}>
      <h1 className="fw-bold text-uppercase">{props.title}</h1>
    </div>
  );
}
