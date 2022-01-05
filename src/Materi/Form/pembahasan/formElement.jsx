import React from "react";

export default class FormElement extends React.Component{
    state =  {
    nama : '' ,
    jurusan : '',
    jenisKelamin : '',
    gender : '',
    alamat : '',
    member : false

    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`
        nama : ${this.state.nama}
        alamat : ${this.state.alamat}
        jurusan : ${this.state.jurusan}
        jenis kelamin : ${this.state.jenisKelamin}
        member : ${this.state.member ? 'YES':'NO'} 
        
        `);
        this.setState({
            nama : '' ,
            jurusan : '',
            jenisKelamin : '',
            gender : '',
            alamat : '',
            member : false 
        })
    }
    render(){
       return(
        <div style={{margin : '100px auto', border : '1px solid black' , padding : '30px' }}>

<form onSubmit={this.handleSubmit}>
        <label >
        Nama :   <input type="text" onChange={e => this.setState({nama : e.target.value}, () =>console.log(this.state)) } value={this.state.nama}/>
        </label>
        <br />
        <label >
        Jurusan : <select onChange={e => this.setState({jurusan : e.target.value}, () =>console.log(this.state))}>
            <option value="Tekhnik Informatika">Tekhnik Informatika</option>
            <option value="Tekhnik Komputer">Tekhnik Komputer</option>
            <option value="Desain Komunikasi">Desain Komunikasi</option>
            <option value="Tekhnik Sipil">Tekhnik Sipil</option>

        </select>
        </label>
        <br />
        <label >
        Jenis Kelamin :
        <input type="radio" value="Laki-laki" name="gender" 
        onChange={e => this.setState({jenisKelamin : e.target.value}, () =>console.log(this.state))}/> Laki - laki 
        <input type="radio" value="Perempuan" name="gender"
        onChange={e => this.setState({jenisKelamin : e.target.value}, () =>console.log(this.state))}/> Perempuan
        </label>
        <br />
        <label>
        Member : <input type="checkbox" checked={this.state.member} onChange={e => this.setState({member : e.target.checked}, () => console.log(this.state))} />    
        </label>
        <br />
        <label htmlFor="">
        Alamat : <textarea cols="30" rows="10" onChange={e => this.setState({alamat : e.target.value}, () =>console.log(this.state)) } value={this.state.alamat}/>
        </label>
        <br /> <br />
        <button type="submit" >Submit</button>
    </form>
        </div>
       )
    }
}