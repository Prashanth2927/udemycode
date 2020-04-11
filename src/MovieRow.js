import React, {Component} from 'react';

class MovieRow extends React.Component{
   viewMovie(){
       const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
       window.location.href = url
   }

   genre(){
       console.log("pras")
       const list=[
        {
            id: 28,
            name: "Action"
          },
          {
            id: 12,
            name: "Adventure"
          },
          {
            id: 16,
            name: "Animation"
          },
          {
            id: 35,
            name: "Comedy"
          },
          {
            id: 80,
            name: "Crime"
          },
          {
            id: 99,
            name: "Documentary"
          },
          {
            id: 18,
            name: "Drama"
          },
          {
            id: 10751,
            name: "Family"
          },
          {
            id: 14,
            name: "Fantasy"
          },
          {
            id: 36,
            name: "History"
          },
          {
            id: 27,
            name: "Horror"
          },
          {
            id: 10402,
            name: "Music"
          },
          {
            id: 9648,
            name: "Mystery"
          },
          {
            id: 10749,
            name: "Romance"
          },
          {
            id: 878,
            name: "Science Fiction"
          },
          {
            id: 10770,
            name: "TV Movie"
          },
          {
            id: 53,
            name: "Thriller"
          },
          {
            id: 10752,
            name: "War"
          },
          {
            id: 37,
            name: "Western"
          }
       ]

       //console.log(list[4].name)

       const genreList=[]
       genreList.push(this.props.movie.genre_ids)
       console.log("ok"+genreList)
      
       genreList.forEach(element => {
        console.log("mummy"+element)   
        console.log("dad"+list[8].id)
        list.forEach(ele=>{
            if(element==ele.id){
                console.log("wow")
            }
            else {console.log("no")}
        })
        
      
       })
       console.log("super"+genreList)
       genreList.forEach(element => {
           console.log("ant"+this.props.movie.genre_ids)

       });
       
   }
   
   
    render(){
    return (
        <table key={this.props.movie.id}>
    <tbody>
     
     <tr>
       <td>
           <img width='100' alt="poster" src={this.props.movie.poster_src} />
       </td>
       <td>
          {this.props.movie.title}
       <p>{this.props.movie.overview}</p>
    <p>Rating {this.props.movie.vote_average}</p>
   {/* <p onClick={this.genre.bind(this)}>Genres{this.props.movie.genre_ids}</p>*/}
    <input type='button' onClick={this.viewMovie.bind(this)} value="View"/>
       </td>
     </tr>
     </tbody>
     </table>
     )

    }
}
export default MovieRow;