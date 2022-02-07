import './App.css';
import Nav from './components/Nav'
import Gif from './components/Gif'
import './app2.css'
import React, { Component } from 'react'



class AppGif extends Component {
  constructor(props) {
    super(props)
    this.state = { gif: [] }
  }
  async apiCall(url, consecuencia) {
    try {
      const response = await fetch(url)
      const { data } = await response.json()
      consecuencia(data)
    } catch (error) {
      console.log(error)
    }
  }
  traerGifNuevo() {
    this.apiCall("https://api.giphy.com/v1/gifs/trending?&api_key=g1jSo67YlVnln4pzWogGhjSqoj4woFw3", this.mostrarGifs)
    console.log('Gifs Nuevos!')
  }
  componentDidMount() {
    console.log("Me monté")
    this.traerGifNuevo()
  }
  mostrarGifs = (data) => {
    this.setState(
      {
        gif: data.map(image => image),
      }
    )
  }
  componentDidUpdate() {
    console.log("Me actualicé")
  }
  render() {
    console.log("Estoy renderizando")
    return (
      <div>
        <Nav 
        tarea= {this.traerGifNuevo()}/>
        <div className='container'>
          <div className='row text-center'>
            {this.state.gif.map((singleGif, i) => {
              return <Gif
                contenido={singleGif.images.downsized.url}
                titulo={singleGif.title}
                key={singleGif.title + i}
              />
            })}
          </div>
        </div>
        <button onClick={() => this.traerGifNuevo()}>Random Gif!</button>
      </div>
    )
  }
}

export default AppGif;

