import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <section class="container">
      <h1 class="large text-primary">
        Sign Up
      </h1>
      <p class="lead"><i class="fas fa-user"></i> Create Your</p>
      <form action="dashboard.html" class="form">
        <div class="form-group">
          <input type="text" placeholder="Name" required />
        </div>
        <div class="form-group">
          <input type="email" placeholder="Email Address" />
          <small class="form-text">
            This site uses Gravatar, so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" minlength="6" />
        </div>
        <div class="form-group">
          <input type="password" placeholder="Confirm Password" minlength="6" />
        </div>
        <input type="submit" value="Register" class="btn btn-primary" />
      </form>
      <p class="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </section>
    </div>
  )
}

export default Register
