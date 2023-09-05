import logo from './logo.svg';
import './App.css';
import {Component} from 'react';


  class App extends Component{
    
    state={
      estudantes: [
        {
          matricula: 1234,
          nome: "Clovis de Almeida Dantas Percinato",
          curso: "Curso Técnico Informática para Internet",
          turma: "1 A"
          

        },
        {
          matricula: 2321,
          nome: "Jobson Rodentes de Esturantes",
          curso: "Curso de Administração",
          turma: "1 B"
        },
        {
          matricula: 3312,
          nome: "Robertson de Alverenga Melebs",
          curso: "Curso de Agronomia",
          turma: "1 C"
        }
      ]
    
    }
    
    render(){
      const {estudantes} = this.state; //Atribuição via desestruturação
      return(
        <div className='div'>
        {estudantes.map(estudantes => (
        <>
        <h1 key={estudantes.matricula}>   {estudantes.nome}</h1>
        <p>{estudantes.curso}</p>
        <p>{estudantes.turma}</p>
        </>
        ))}
        </div>
      )
      
    }
    }
   export default App;