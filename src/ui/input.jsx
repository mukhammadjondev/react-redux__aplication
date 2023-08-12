import { useCallback } from "react"
import { useSelector } from "react-redux"

const Input = ({label, state, setState, type = 'text'}) => {
  const {error} = useSelector(state => state.auth)

  const errorMessage = useCallback(() => {
    return Object.keys(error).map(name => {
      const msg = error[name].join(', ')
      if(label.toLowerCase() == name) {
        return <div key={name} className="invalid-feedback d-block">{msg}</div>
      } else if ('emailOrPassword' == name) {
        return <div key={name} className="invalid-feedback d-block">{name} {msg}</div>
      }
    })
  }, [error])

  return (
    <div className='form-floating mt-2'>
			<input type={type} className='form-control' value={state} onChange={e => setState(e.target.value)}id={label} placeholder={label} />
			<label htmlFor={label}>{label}</label>
      {error !== null && errorMessage()}
		</div>
  )
}

export default Input