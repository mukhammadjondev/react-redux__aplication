import { useState } from "react"
import { Input } from "../ui"
import { icon } from '../constants'
import { useDispatch, useSelector } from "react-redux"
import { signUserStart, signUserSuccess, signUserFailure } from '../slice/auth'
import AuthService from "../service/auth"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const {isLoading} = useSelector(state => state.auth)

  const loginHandler = async e => {
		e.preventDefault()
		dispatch(signUserStart())
    const user = {email, password}
    try {
      const response = await AuthService.userLogin(user)
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors))
    }
	}

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img src={icon} alt="icon" width='72px' height='60px' />
          <h3 className="mb-3 fw-normal">Please login</h3>

          <Input label={'Email'} state={email} setState={setEmail} id='floatingEmail' />
          <Input label={'Password'} type='password' state={password} setState={setPassword} id='floatingPassword' />

          <button type="submit" className="w-100 btn btn-lg btn-primary mt-2" onClick={loginHandler} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </main>
    </div>
  )
}

export default Login