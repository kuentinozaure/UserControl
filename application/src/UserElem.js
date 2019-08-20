import React, { Component } from 'react'
import Axios from 'axios';

class UserElem extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            id : this.props.id,
            nom : this.props.nom,
            prenom : this.props.prenom,
            mail : this.props.mail,
            isUpdate : false,
            isDelete :false,
        };
        this.updateClick = this.updateClick.bind(this)
        this.deleteClick = this.deleteClick.bind(this)
    }

    updateClick(){
        let isUp = this.state.isUpdate
        if(isUp === true){
            this.setState({isUpdate:false})
        }else{
            this.setState({isUpdate:true})
        }
    }
    deleteClick(id){
        Axios.delete("http://localhost:8080/user/"+id+"/")
    }

    display(){
        if (this.state.isUpdate == false) { // si le bouton n est pas clique
            return(
            <tr>
                <td>{this.state.id}</td>
                <td>{this.state.nom}</td>
                <td>{this.state.prenom}</td>
                <td>{this.state.mail}</td>
                <td>
                    <a className="waves-effect waves-light btn" onClick={this.updateClick}>
                        <i className="material-icons centered" >
                            create
                        </i>
                    </a>
                    <a className="waves-effect waves-light btn red" onClick={this.deleteClick(this.state.id)}>
                        <i className="material-icons centered">
                            clear
                        </i>
                    </a>
                </td>
            </tr>)
        }else{
            return(
            <tr>
                <td>{this.state.id}</td>
                <td>
                    <input id="nom" type="text" className="validate" value={this.state.nom}/>
                    <label htmlFor="nom">nom</label>
                </td>
                <td>
                    <input id="prenom" type="text" className="validate" value={this.state.prenom}/>
                    <label htmlFor="prenom">prenom</label>
                </td>
                <td>
                    <div className="input-field inline">
                        <input id="email" type="email" value={this.state.mail} className="validate"/>
                        <label htmlFor="email">Email</label>
                        <span className="helper-text" data-error="non correct" data-success="correct"></span>
                    </div>
                </td>
                <td>
                    <a className="waves-effect waves-light btn" onClick={this.updateClick}>
                        <i className="material-icons centered">
                            done
                        </i>
                    </a>
                </td>
            </tr>)
        }
    }


    render() {
        return (
            <React.Fragment>
                {this.display()}
            </React.Fragment>
        );
    }
}

export default UserElem;



{/* 
        
    
            <div class="chip right red lighten-2 white-text text-darken-2" >
        Votre utilisateur à été supprimé
        <i class="close material-icons">close</i>
    </div>
    <tr>
                <td>1</td>
                <td>
                    <input id="nom" type="text" class="validate" value="Melvin"/>
                    <label for="nom">nom</label>
                </td>
                <td>
                    <input id="prenom" type="text" class="validate" value="Alvin"/>
                    <label for="prenom">prenom</label>
                </td>
                <td>
                    <div class="input-field inline">
                        <input id="email" type="email" value="mel@gmail.com" class="validate"/>
                        <label for="email">Email</label>
                        <span class="helper-text" data-error="non correct" data-success="correct"></span>
                    </div>
                </td>
                <td>
                    <a class="waves-effect waves-light btn">
                        <i class="material-icons centered">
                            done
                        </i>
                    </a>
                </td>
            </tr> */}