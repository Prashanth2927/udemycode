import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow';
import $ from 'jquery';
//import Products from './Components/Products';
//import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import AddPage from './Components/AddPage';


export default class MovieApp extends Component {
  constructor(props){
    super(props);
   
      this.state={
          rows: '',
          genres: '',
          options: []

      }

  
  /*const movies= [
    {id:'1', poster_src:'John Wick.jpg', title:'John Wick', overview:'Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.'},
    {id:'2', poster_src:'Ad Astra.jpg', title:'Ad Astra', overview:'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.'}
  
  ]
  
    var movieRows= [];
   movies.forEach((movie)=>{
    const movieRow = <MovieRow movie={movie}/>
      movieRows.push(movieRow)
   })
   
   this.state={
    rows: movieRows,
  }*/

  this.performSearch("avenger")

  }

  performRating(){
    console.log("Rating")
    const urlString = "http://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&api_key=fb5ff6bf0f9582783e48fd20162740f5&page=1"
    
    //const urlString= "https://api.themoviedb.org/3/discover/movie?api_key=fb5ff6bf0f9582783e48fd20162740f5&language=en-US&sort_by=original_title.asc&page=1&with_genres=" + this.state.options
   // const urlString= "https://api.themoviedb.org/3/search/movie?api_key=fb5ff6bf0f9582783e48fd20162740f5&query=" + searchTerm
  
     $.ajax ({
        url: urlString,
        success: (searchResults) =>{
          console.log("Rating"+searchResults)
          const results = searchResults.results
             
           var movieRows=[];
             results.forEach((movie)=>{
               movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
              const movieRow = <MovieRow key={movie.id} movie={movie} />
              const genre_list = movie.genre_ids
              //console.log("hello" + genre_list)
              //console.log("hi" + movie.genre_ids)
              movieRows.push(movieRow)   
             })

             this.setState({rows: movieRows})
        },
        error: (xhr, status, err) =>{
          console.log("error")
        } 
        
    })

    }

  performFilter(){
    console.log("filter")
    const urlString= "https://api.themoviedb.org/3/discover/movie?api_key=fb5ff6bf0f9582783e48fd20162740f5&language=en-US&sort_by=original_title.asc&page=1&with_genres=" + this.state.options
   // const urlString= "https://api.themoviedb.org/3/search/movie?api_key=fb5ff6bf0f9582783e48fd20162740f5&query=" + searchTerm
  
     $.ajax ({
        url: urlString,
        success: (searchResults) =>{
          console.log(searchResults)
          const results = searchResults.results
             
           var movieRows=[];
             results.forEach((movie)=>{
               movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
              const movieRow = <MovieRow key={movie.id} movie={movie} />
              const genre_list = movie.genre_ids
              //console.log("hello" + genre_list)
              //console.log("hi" + movie.genre_ids)
              movieRows.push(movieRow)   
             })

             this.setState({rows: movieRows})
        },
        error: (xhr, status, err) =>{
          console.log("error")
        } 
        
    })

    }

    performSearch(searchTerm){
      //console.log(searchTerm)
      //const urlString= "https://api.themoviedb.org/3/discover/movie?api_key=fb5ff6bf0f9582783e48fd20162740f5&language=en-US&sort_by=original_title.asc&page=1&with_genres=" + this.state.options
     const urlString= "https://api.themoviedb.org/3/search/movie?api_key=fb5ff6bf0f9582783e48fd20162740f5&query=" + searchTerm
    
       $.ajax ({
          url: urlString,
          success: (searchResults) =>{
            console.log(searchResults)
            const results = searchResults.results
               
             var movieRows=[];
               results.forEach((movie)=>{
                 movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
                const movieRow = <MovieRow key={movie.id} movie={movie} />
                const genre_list = movie.genre_ids
                //console.log("hello" + genre_list)
                //console.log("hi" + movie.genre_ids)
                movieRows.push(movieRow)   
               })
  
               this.setState({rows: movieRows})
          },
          error: (xhr, status, err) =>{
            console.log("error")
          } 
          
      })
  
      }

    searchChangeHandler=(event)=>{
      const searchTerm = event.target.value
      this.performSearch(searchTerm)
    }

    ratingHandler = (event) =>{
      this.performRating()
    }

     ChangeHandler=(e)=>{
      const options = this.state.options
      let index
       if(e.target.checked) {
         options.push(e.target.value)
        // console.log("changehandler"+options)
       }

       else {index = options.indexOf(e.target.value)
              options.splice(index,1)
      }
      this.setState({ options: options })
     // const ischecked = event.target.checked       
        
       //const genreValue = event.target.value
       this.performFilter(options)
       console.log(options)
      // if(ischecked){
        // this.filterHandler(genreValue)
       //}

     }

  render() {
    return (
      <div className="container-fluid">
         <div className="row">
        <div className="col-12">
        <table style={{
            backgroundColor: 'orange',
            display:"block",
            color:'#fff',
            paddingLeft: 16
          }}> 
            <tbody>
              <tr>
                <td>
                  <img alt='app icon' width='50' src="movieimg.png"/>
                </td>
                <td width='8' />
                <td >
                  <h1>MovieDB</h1>
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>

        <div className="col-12">
        <input style={{
            fontSize:24,
            display:'block',
            width: '99%',
            paddingTop:8,
            paddingBottom:8,
            paddingLeft:16,
          }}
                 onChange= {this.searchChangeHandler.bind(this)}
                 placeholder="Search with title" />
        </div>
         
         <div className="col-2">
          <h3>Filter</h3>
           <div>
             <ul style={{listStyleType: 'none'}}>
               <li>
               <input type="checkbox"  onChange={this.ChangeHandler.bind(this)} name="action" value="28"/> action
                 </li>
                  <li>
                  <input type="checkbox" onChange={this.ChangeHandler.bind(this)} name="Adventure" value="12"/> Adventure
                    </li>
                    <li>
                    <input type="checkbox" onChange={this.ChangeHandler.bind(this)} name="Animation" value="16"/> Animation
                   </li>
                     <li>
                     <input type="checkbox" onChange={this.ChangeHandler.bind(this)} name="Comedy" value="35"/> Comedy
                     </li>
                     <li>
                     <input type="checkbox" onChange={this.ChangeHandler.bind(this)} name="Crime" value="80"/> Crime
                 </li>
                  <li>
                  <input type="checkbox" onChange={this.ChangeHandler.bind(this)} name="Documentary" value="99"/> Documentary
                    </li>
                    <li>
                    <input type="checkbox" onChange={this.ChangeHandler.bind(this)} name="Drama" value="18"/> Drama
                   </li>
                     <li>
                     <input type="checkbox" onChange={this.ChangeHandler.bind(this)} name="Family" value="10751"/> Family
                     </li>
                     <li>
               <input type="checkbox" onChange={this.ChangeHandler.bind(this)} name="Fantasy" value="14"/> Fantasy
                 </li>
                  <li>
                  <input type="checkbox" onChange={this.ChangeHandler.bind(this)} name="History" value="36"/> History
                    </li>
                    <li>
                    <input type="checkbox" onChange={this.ChangeHandler.bind(this)} name="Horror" value="27"/> Horror
                   </li>
                     <li>
                     <input type="checkbox" onChange={this.ChangeHandler.bind(this)} name="Music" value="10402"/> Music
                     </li>
                     <li>
                     <input type="checkbox" onChange={this.ChangeHandler.bind(this)} name="Mystery" value="9648"/> Mystery
                 </li>
                  <li>
                  <input type="checkbox" onChange={this.ChangeHandler.bind(this)} name="Romance" value="10749"/> Romance
                    </li>
                    <li>
                    <input type="checkbox" onChange={this.ChangeHandler.bind(this)} name="Science Fictionama" value="878"/> Science Fictionama
                   </li>
                     <li>
                     <input type="checkbox" onChange={this.ChangeHandler.bind(this)} name="TV Movie" value="10770"/> TV Movie
                     </li>
                     <li>
                     <input type="checkbox" onChange={this.ChangeHandler.bind(this)} name="Thriller" value="53"/> Thriller
                     </li>
                     <li>
                     <input type="checkbox" onChange={this.ChangeHandler.bind(this)} name="War" value="10752"/> War
                 </li>
                  <li>
                  <input type="checkbox" onChange={this.ChangeHandler.bind(this)} name="Western" value="37"/> Western
                    </li>
               </ul>
               
          <button onSubmit={this.ratingHandler.bind(this)}>SearchByRating</button>
            </div>
         </div>
        
        <div className="col-10">
        <table>
                <tbody>
                   <tr>
                     
                      <td>
                          {this.state.rows}
                      </td>
                   </tr>
                 </tbody>
              </table>
         </div>
           

        </div>


             
               </div>
    
    
    
      /*<Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/AddPage" component={AddPage} />
          </Switch>
        </div>
      </Router>*/
    );
  }
}