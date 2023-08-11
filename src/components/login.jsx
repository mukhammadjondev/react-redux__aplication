import { useState } from "react"
import { Input } from "../ui"
import { icon } from '../constants'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img src={icon} alt="icon" width='72px' height='60px' />
          <h3 className="mb-3 fw-normal">Please login</h3>

          <Input label={'Email'} state={email} setState={setEmail} id='floatingEmail' />
          <Input label={'Password'} type='password' state={password} setState={setPassword} id='floatingPassword' />

          <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">Login</button>
        </form>
      </main>
    </div>
  )
}

export default Login