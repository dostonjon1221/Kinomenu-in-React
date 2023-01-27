import React from 'react'
import "../movies-add/movies-add.css"

class MoviesAdd extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      name :"",
      viewers:""

    }
  }
  changeHandlerInput = e =>{
   this.setState({
    [e.target.value] : e.target.value
   })
  }


render(){
const {name, viewers} = this.state
  const {addForm}= this.props
  return(
    <div className='movies-add'>
      <h1>Yangi kino qo'shish</h1>
     <form className='add-form d-flex' onSubmit={(e)=> addForm(e,{name,viewers})}>

        <input type="text" className='form-control new-post-lebel'
         placeholder='Qanday kino'
         name = "name"
         onChange={this.changeHandlerInput} value={this.name}/>

        <input type="text" className='form-control new-post-lebel'
         placeholder="Nechi marotaba ko'rilgan"
          onChange={this.changeHandlerInput} />
          
        <button className='btn btn-dark'>Qo'shish</button>
     </form>
     
    </div>
  )
}

}
export default MoviesAdd


// const MoviesAdd = () => {
//   return (
//     <div className='movies-add'>
//       <h1>Yangi kino qo'shish</h1>
//      <form className='add-form d-flex'>

//         <input type="text" className='form-control new-post-lebel' placeholder='Qanday kino' />
//         <input type="text" className='form-control new-post-lebel' placeholder='Nechi marotaba ko'rilgan/>
//         <button className='btn btn-dark'>Qo'shish</button>
//      </form>
     
//     </div>
//   )
// }

