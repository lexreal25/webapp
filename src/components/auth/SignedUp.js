import React, { Component } from 'react'

export default class SignedUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {  
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        })
        console.log(this.state)
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Signup</h5>

                    <div className='input-field'>
                        <label htmlFor='firstname'>First Name</label>
                        <input type='text' id='firstname' onChange={this.handleChange} />
                    </div>

                    <div className='input-field'>
                        <label htmlFor='lastname'>Surname</label>
                        <input type='text' id='lastname' onChange={this.handleChange} />
                    </div>

                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handleChange} />
                    </div>

                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={this.handleChange} />
                    </div>

                    <div className='input-field'>
                       <button className='btn pink lighten-1 z-depth-0'type='submit'>SIGN UP</button>
                    </div>
                </form>
            </div>
        )
    }
}
