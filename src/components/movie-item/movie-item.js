import React from 'react'
import "../movie-item/movie-item.css"

class MovieItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            favourite:false,
            like :true,
            name:"",

        }
    }


    onFavourite = ()=>{
        this.setState(({favourite})=>({
            favourite: !favourite,
        }))
    }
    onLike  = ()=>{
       this.setState(({like})=>({
        like:!like,
       }))
    }
    render(){

     const   {name, viewers, onDelete} = this.props
     const {favourite, like, } = this.state
        return (
   

            <li className={`list-group-item ${favourite && "favourite"} ${like && "like"} d-flex justify-content-between movie-item `}>
                <span onClick={this.onLike} className='list-group item-label  '>{name}</span>
                <input type="number" defaultValue={viewers}  />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type='button' className='btn-cookie btn-sm' onClick={this.onFavourite}>
                        <i className='fas fa-cookie'></i>
                    </button>
                    <button type='button' className='btn-trash btn-sm' onClick={onDelete}>
                        <i className='fas fa-trash'></i>
                    </button>
                     <i className='fas fa-star btn-star star '></i>
                </div>
                
            </li>
           
          ) 
    }
}

export default MovieItem
// const MovieItem = () => {

//   return (
   

//     <li className={`list-group-item d-flex justify-content-between movie-item ${favourite && "favourite"}`}>
//         <span className='list-group item-label  '>{name}</span>
//         <input type="number" defaultValue={viewers}  />
//         <div className='d-flex justify-content-center align-items-center'>
//             <button type='button' className='btn-cookie btn-sm'>
//                 <i className='fas fa-cookie'></i>
//             </button>
//             <button type='button' className='btn-trash btn-sm'>
//                 <i className='fas fa-trash'></i>
//             </button>
//              <i className='fas fa-star btn-star'></i>
//         </div>
        
//     </li>
   
//   )
// }

