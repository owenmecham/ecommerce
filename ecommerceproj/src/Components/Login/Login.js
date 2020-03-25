import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleLogin() {
        console.log(this.state);
        const { email, password } = this.state;
        axios.post("/api/login", {
            email,
            password
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className='login-wrap'>
                <div className='login-body'>
                    <div className='login'>
                        <h1>Login</h1>
                        <input onChange={this.handleInput} placeholder='Email' name="email" />
                        <input placeholder='Password' type='password' name="password" onChange={this.handleInput} />
                        <div className='login-buttons'>
                            <button onClick={this.handleLogin} className='login-btn'>LOGIN</button>
                            <Link to='/'><button className='cancel-btn'>CANCEL</button></Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Login;