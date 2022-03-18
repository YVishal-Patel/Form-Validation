import React from 'react'
import './form.css'
import { useForm } from 'react-hook-form'

export default function Form() {

    const {register, handleSubmit, formState:{errors}} = useForm()
  return (
      <>
           <div className="container">
        <div className="header">

            <h2>Create Account</h2>
        </div>
        <form action="" id="form" className="form">


            <div className="form_items ">
                <label for="email">Email :</label>
                <input type="email" placeholder="Enter your email" id="email" />
                <small>There is some sort of the error please resolve the error</small>
            </div>

            <div className="form_items">
                <label for="password">Password :</label>
                <input type="password" placeholder="Enter password" id="password" />
                <small>Error</small>
            </div>

            
            <div className="form_items">
                <label for="password2">Confirm Password:</label>
                <input type="password" placeholder="Confirm Passwords" id="password2" />
                <small>Error</small>
            </div>
            <button className="Submit_btn"> Submit</button>
        </form>
    </div>

      </>
  )
}
