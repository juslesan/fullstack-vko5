import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'


const store = createStore(reducer)

const Statistiikka = () => {
    const state = store.getState()
    const palautteita = state.good + state.bad + state.ok
    const keskiarvo = palautteita === 0 ? 0 : (state.good - state.bad) / palautteita
    const positiiviset = (palautteita === 0 
      ? 0
      : state.good / palautteita) * 100 + "%"
    if (palautteita === 0) {
    return (
      <div>
        <h2>statistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }
  
  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>{state.good}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>{state.ok}</td>
          </tr>
          <tr>
            <td>huono</td>
            <td>{state.bad}</td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td>{keskiarvo}</td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td>{positiiviset}</td>
          </tr>
        </tbody>
      </table>

      <button>nollaa tilasto</button>
    </div >
  )
}

class App extends React.Component {
  klik = (nappi) => () => {
    store.dispatch({type: nappi})
    console.log(store.getState())
 }

  render() {
    
    return (
      <div>
                    {/* {store.getState()} */}

        <h2>anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>hyvä</button>
        <button onClick={this.klik('OK')}>neutraali</button>
        <button onClick={this.klik('BAD')}>huono</button>
        <Statistiikka />
        
      </div>
    )
  }
}

const renderApp = () => {
    ReactDOM.render(<App />, document.getElementById('root'))
  }
  
  renderApp()
  store.subscribe(renderApp)