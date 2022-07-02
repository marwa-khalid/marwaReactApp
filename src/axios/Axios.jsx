import React from "react";
import axios from 'axios';
const url = "https://marwa-api.herokuapp.com/uploads/"

export default class Movies extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    axios.get("https://marwa-api.herokuapp.com/movies")
      .then(response => {
        const movies = response.data;
        this.setState({ movies });
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row my-4">
          <div className="col-lg-12">
            <div className="card shadow">
              <div className="card-header d-flex justify-content-between align-items-center">
                <div className="text-secondary font-weight-bold fs-3">All Movies</div>
              </div>
              <div className="card-body">
                <div className="row p-4">
                {
                this.state.movies
                  .map(movie =>
                    <React.Fragment key={movie.id}>
                      <div className="col-sm-3 shadow-lg m-4 p-4" >
                        <div className="movieCard">
                          <img className="image w-100" src={url + movie.image}/>
                          <div className="card-text p-2">
                            <h2 className="card-title" >{movie.name}</h2>
                            <span className="year" >{movie.year}</span>
                            <p className="description"> {movie.description}</p>
                          </div>
                {/*<button className="btn bg-danger" type="submit" onClick={e => this.handleDelete(e, movie)}>
                              Delete
                        </button> */ }
                        </div>
                      </div>
                    </React.Fragment>
                  )
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}