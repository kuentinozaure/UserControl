import React, { Component } from 'react'
import axios from 'axios'
import qs from 'querystring'
import UserElem from './UserElem.js'

class Adminstration extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            users : [],
            nom:"",
            prenom:"",
            mail:"",
        };
        this.clickAdd = this.clickAdd.bind(this)
    }

    componentDidMount() {
      axios.get("http://localhost:8080/user/")
           .then(res=>{
               console.log(res.data)
               this.setState({
                   users : res.data,
               });
           });
    }

    clickAdd(){
        console.log(this.state.nom)
        const requestBody = {
            name: this.state.nom,
            surname: this.state.prenom,
            mail: this.state.mail,
          }

          const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }

        axios.post("http://localhost:8080/user/",qs.stringify(requestBody),config)
    }

    displayUserElem(){
        let item = []
        this.state.users.map((user,index) =>{
            item.push(
            <UserElem
                id= {user.ID}
                nom = {user.NOM}
                prenom= {user.PRENOM}
                mail= {user.MAIL}
            />
            )
        })
        return item
    }
    
    render() {
        return (
            <div>
    <nav className ="nav-extended blue">
        <div className="nav-wrapper">
            <a href="#" className="brand-logo">Administration</a>
        </div>
    </nav>
   <br></br>

    <table className="centered"> 
        <thead>
            <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Mail</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {this.displayUserElem()}

            <tr>
                <td>X</td>
                <td>
                    <input id="nomAdd" type="text" className="validate" onChange={(text) => this.setState({nom:text.target.value})}/>
                    <label htmlFor="nomAdd">nom</label>
                </td>
                <td>
                    <input id="prenomAdd" type="text" className="validate" onChange={(text) => this.setState({prenom:text.target.value})}/>
                    <label htmlFor="prenomAdd">prenom</label>
                </td>
                <td>
                    <div className="input-field inline">
                        <input id="emailAdd" type="email" className="validate" onChange={(text) => this.setState({mail:text.target.value})}/>
                        <label htmlFor="emailAdd">Email</label>
                        <span className="helper-text" data-error="non correct" data-success="correct"></span>
                    </div>
                </td>
                <td>
                    <a className="waves-effect waves-light btn">
                        <i className="material-icons centered" onClick={this.clickAdd}>
                            add
                        </i>
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
        );
    }
}

export default Adminstration;