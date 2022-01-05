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
        ) }

export default class Register extends React.Component{
    state = {
        nama : '',
        email : '',
        password : '',
        nohp : '',
        errors : []
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        const {nama, email, password,nohp} = this.state
        let data = {email, password,nama, nohp};
          
          let rules = {
            nama: 'required',
            email: 'required|email',
            password : 'min:8|required',
            nohp : 'min:9|required'

          };

          let Validation = new Validator(data, rules);
        

          if(Validation.fails()){
            this.setState({
                errors : [
                  ...Validation.errors.get('nama'),
                  ...Validation.errors.get('email'),
                  ...Validation.errors.get('password'),
                  ...Validation.errors.get('nohp')
              ]
            })
            
          } else {
              alert(`
              Regitrasi Berhasil
              Nama         : ${this.state.nama}
              Email        : ${this.state.email}
              Password     : ${this.state.password}
              Nomor HP     : ${this.state.nohp}
              
              
              `)
              this.setState({
                        errors : []
                    })
          }
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
                
                    <h4> <strong>Register</strong> </h4>
                    <Input type= "text" name="nama" label="Nama" 
                    onChange={value => this.setState({nama : value})} />
                    <Input type= "email" name="email" label="Email" 
                    onChange={value => this.setState({email : value})} />
                    <Input type= "password" name="password" label="Password" 
                    onChange={value => this.setState({password : value})} />
                    <Input type= "text" name="nohp" label="Nomor Telepon" 
                    onChange={value => this.setState({nohp : value})} />

                    <br />
                    <button type="submit">Register</button>
                </form>
            </div>
        ) 



    }
}