import React, { Component } from 'react'
import { Card, Button, Badge } from 'react-bootstrap';
import HomePage from '../home/HomePage';
import './Login.css'
class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            userName: '',
            password: '',
            flag: 0
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange (e)  {

        this.setState({
            [e.target.name]: e.target.value
        })


    }
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.userName === "admin" && this.state.password === "1234") {
            console.log('success');
            this.setState({
                flag: 1
            })
        } else {
            console.log('fail');

            this.setState({
                flag: 2
            })
        }
    }
    render() {
        if (this.state.flag === 1) {
            return (
                <div>
                    <HomePage />
                </div>
            )
        }
        return (
            <div>
                <Card className="card-login" >
                    <form onSubmit={this.handleSubmit}>
                        <h2>Login Page</h2>
                        <label>UserName</label><br/>
                        <input required name="userName" type="text" onChange={this.handleChange} /> <hr />
                        <label>Password</label><br/>
                        <input required="true" name="password" type="password" onChange={this.handleChange} />
                        <br />
                        {this.state.flag === 2 ? <label style={{ color: 'red' }}>Incorrect Credentials</label> : <div></div>}
                        <Button type="submit" style={{marginTop:'5%'}} className="btn-primary" >Submit</Button>


                    </form>
                   
                </Card>
            </div>
        )
    }
}

export default Login
