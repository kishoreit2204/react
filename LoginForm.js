import React, { Component } from 'react';

 let loginData={
  "username":"hruday@gmail.com",
  "password" :"hruday123"} 

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      password1: '',
      validationErrors:{},
      userData:[]
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.validateFields = this.validateFields.bind(this)
  }
  /* componentDidMount(){
    fetch('./login-data.json')
    .then(res=>res.json())
    .then(data1=>this.setState({userData:data1}))
    .catch(err=>console.log(err))
 } */

  handleOnChange(e) {
    const target = e.target
    const name = target.name
    const value = target.value
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit(e) {
    e.preventDefault()
    this.validateFields()
    console.log("Submitted.!")
  }

  validateFields(){
    const {firstName,password1} = this.state
    //const {username:mydata,password:myword} = this.state.data
    const errors = {}
    let array=Object.values(loginData)
    const[mydata,myword]=array
    if(!firstName){
      errors['firstName'] = 'UserName Cannot be empty'
    }
    if(!password1){
      errors['password1'] = 'Password Cannot be empty'
    }
    if(firstName===mydata && password1===myword){
      errors['success']='LoginSuccess'

    }else{
      errors['err']='Not match'
    }
  
    this.setState({
      validationErrors:errors
    })
  }

  render() {
      const {
        firstName: firstNameError,
        password1 : passwordError,
        err:errdata,
        success:succdata
      } = this.state.validationErrors
      //console.log(this.state.userData)
    return (
      <section>
        <h3>Login Form:</h3>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            <span>{firstNameError}</span>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleOnChange}
            />
          </label>

          <label>
          <span>{passwordError}</span>
            <input
              type="text"
              name="password1"
              placeholder="password1"
              value={this.state.password1}
              onChange={this.handleOnChange}
            />
          </label>
          {succdata}
          {errdata}
          <button type="submit">Submit</button>
        </form>
      </section>
    )
  }
}

export default LoginForm;