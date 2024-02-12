import React from 'react'
import styles from './notfound.module.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className={styles.body}>
      <h1>404!! Page Not Found!!</h1>
      <h3>👇Click to be redirected👇</h3>
      <p>
        <Link to='/'>Home</Link>
      </p>
    </div>
  )
}

export default NotFound
