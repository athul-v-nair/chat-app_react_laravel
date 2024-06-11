import React from 'react'
import { CardBody, Form } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import styles from './Login.module.css'

const Login = ({typedUsername, setTypedUsername, loginSubmission}) => {
  return (
    <div className={styles['loginContainer']}>
        <Card className={styles['loginContainer__loginBoxContainer']}>
            <Card.Title>
                <img src='./helloworld.png' alt="hello-world logo" />
            </Card.Title>
            <Card.Body>
              <Form className={styles['loginContainer__loginBoxContainer__body']} onSubmit={loginSubmission}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder='Username' required onChange={(e)=>{setTypedUsername(e.target.value)}}/>
                <button type="submit">Get Chatting</button>
              </Form>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Login
