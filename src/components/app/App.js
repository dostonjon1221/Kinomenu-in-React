import React from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import AppInfo from '../app-info/app-info';
import "../app/App"
import MovieList from '../movie-list/movie-list';
import MoviesAdd from '../movies-add/movies-add';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      data : [
        {name:"Osman " ,viewers:891 , favourite :false, id:1},
        {name:"Empire " ,viewers:891 ,favourite :false, id:2},
        {name:"Osman " ,viewers:891, favourite :false , id:3},
        {name:"Osman " ,viewers:891, favourite :true , id:4},
      ]
    }
    
  }
  
  onDelete = id =>{
   this.setState(({data})=>{
    const index = data.findIndex(c => c.id === id)
    data.splice(index,1)
    const newArr= data.filter(c => c.id !==id)

    return {
      data:newArr
    }
   })
  }

  addForm = (e,item) =>{
    e.preventDefault()
    this.setState(({data})=>{
      const newArr = [...data,{...item, id:uuidv4()}]
      return{
        data:newArr
      }
    })
  }
    render(){
    
    const {data} = this.state
    return (
      <div className='app font-monospace'>
        <div className='content'>
          <AppInfo />
          <div className='search-panel'>
            <SearchPanel />
            <AppFilter />
          </div>
            <MovieList data= {data} onDelete={this.onDelete} />
            <MoviesAdd addForm = {this.addForm}/>
        </div>
      </div>
    );
  }
}

// const App = () =>{

//   const 
  
//   return (
//     <div className='app font-monospace'>
//       <div className='content'>
//         <AppInfo />
//         <div className='search-panel'>
//           <SearchPanel />
//           <AppFilter />
//         </div>
//           <MovieList data= {data} />
//       <MoviesAdd></MoviesAdd>
//       </div>
//     </div>
//   );
// }

export default App;
