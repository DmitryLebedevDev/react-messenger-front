import React from 'react'
import { Link } from 'react-router-dom'
import AuthBg from './components/AuthBg'

export default function LoginPage() {
  return (
    <AuthBg>
      login
      <Link to={'/registration'}>
        reg
      </Link>
    </AuthBg>
  )
}
