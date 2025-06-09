import LoginForm from '../components/LoginForm'
import { useState } from 'react'
import RegisterForm from '../components/RegisterForm';

function AuthPage() {
    const [state,setState] = useState(true);

  return (
    <div className='flex items-center justify-center h-screen'>
    {state ? <LoginForm state={setState}/> : <RegisterForm state={setState}/>}
    </div>
  )
}

export default AuthPage