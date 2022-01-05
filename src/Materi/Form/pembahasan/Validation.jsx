import React from "react";
import * as Validator from 'validatorjs';

const Input = ({label, type, name , onChange}) => {
return(
    <div>
    <label >
    {label} 
    </label>
    <br />
    <input type= {type} name = {name} onChange ={e => onChange(e.target.value) }/> 
    <br />
    </div>
)
}

const ShowError = ({errors}) => {
    return(
        <ul style={{color : 'red' , marginLeft: '-20px' }}> 
        {errors.map((errors, i) => <li key={i}> {errors}</li> )
        
        }
         </ul>
    )


}
export default class Validation extends React.Component{
    state = {
        email : '',
        password : '',
        errors : []
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        const {email, password} = this.state
        let data = {email, password};
          
          let rules = {
            email: 'required|email',
            password : 'min:8|required'
          };

          let Validation = new Validator(data, rules);
          Validation.passes();
          this.setState({
              errors : [
                ...Validation.errors.get('email'),
                ...Validation.errors.get('password')
            ]
          })

        // let message = [];
        // if (email.length === 0){
        //     message= [...message, 'Email Tidak Boleh Kosong']
        // }
        // if (password.length === 0){
        //     message= [...message, 'Password Tidak Boleh Kosong']
        // }

        // const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        // if(!re.test(String(email).toLowerCase())) {
        //     message = [...message , 'Email Tidak Valid']
        // }
        // if(password.length < 8){
        //     message = [...message , 'Password Harus lebih dari 8 karakter']
        // }
        // if (message.length > 0 ){
        //     this.setState({
        //         errors : message
        //     } ,() => console.log(this.state.errors))
        // } else {
        //     alert (
        //         `
        //         Email       : ${this.state.email}
        //         Password    : ${this.state.password}

                
                
                
        //         `
        //     )

        //     this.setState({
        //         errors : []
        //     })
        // }
    }
    render(){
        const style = {
            width : '400px',
            margin : '100px auto 0',
            border : '1px solid black',
            padding : '10px'
        }
        return(
            <div style={style}>
                <form onSubmit={this.handleSubmit}>
                {
                    this.state.errors && <ShowError errors={this.state.errors}/>
                }
                    <h4> <strong>Login Page</strong> </h4>
                    <Input type= "email" name="email" label="Email" 
                    onChange={value => this.setState({email : value})} />

                    <Input type= "password" name="password" label="Password" 
                    onChange={value => this.setState({password : value})} />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

