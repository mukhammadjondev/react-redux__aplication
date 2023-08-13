import { useEffect, useState } from "react"
import { Input } from "../ui"
import { icon } from '../constants'
import { useDispatch, useSelector } from "react-redux"
import { signUserStart, signUserSuccess, signUserFailure } from '../slice/auth'
import AuthService from "../service/auth"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const {isLoading, loggedIn} = useSelector(state => state.auth)
  const navigate = useNavigate()

  const registerHandler = async e => {
    e.preventDefault()
    dispatch(signUserStart())
    const user = {username: name, email, password}
    try {
      const response = await AuthService.userRegister(user)
      dispatch(signUserSuccess(response.user))
      navigate('/')
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors))
    }
  }

  useEffect(() => {
    if(loggedIn) {
      navigate('/')
    }
  }, [loggedIn])

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img src={icon} alt="icon" width='72px' height='60px' />
          <h3 className="mb-3 fw-normal">Please register</h3>

          <Input label={'Username'} state={name} setState={setName} id='floatingInput' />
          <Input label={'Email'} state={email} setState={setEmail} id='floatingEmail' />
          <Input label={'Password'} type='password' state={password} setState={setPassword} id='floatingPassword' />

          <button className="w-100 btn btn-lg btn-primary mt-2" type="submit" disabled={isLoading} onClick={registerHandler}>
            {isLoading ? 'Loading...' : 'Register'}
          </button>
        </form>
      </main>
    </div>
  )
}

export default Register