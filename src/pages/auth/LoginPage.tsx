import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div>
      login
      <Link to={'/registration'}>
        reg
      </Link>
    </div>
  )
}
