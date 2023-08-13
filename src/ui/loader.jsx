const Loader = () => {
  return (
    <div className="d-flex mx-auto align-items-center" style={{height: '75vh'}}>
      <div className="spinner-border d-flex mx-auto align-items-center" style={{width: '4rem', height: '4rem'}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Loader