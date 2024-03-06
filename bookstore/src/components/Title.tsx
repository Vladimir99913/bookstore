interface TitleProps {
  title: string,
}

export function Title (props:TitleProps) {
  return(
    <div className="container-sm d-flex flex-column w-75 m-3">
      {/* <button className="btn btn-light w-25 mb-3">{props.btnBack}{props.id}</button> */}
      <h1 className="fw-bold">{props.title}</h1>
    </div>
  )
}
