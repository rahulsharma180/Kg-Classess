 

function ErrorMassege(props ) {
  return (
    <>
      {props.item.length === 0 && <h3>I am still hungry.</h3>}   
    </>
  )
}

export default ErrorMassege
