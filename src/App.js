
import './App.css';
import { ReactComponent as Dice }  from './icon-dice.svg';
import { ReactComponent as Divider }  from './divider.svg';
import React from 'react';


class Advice extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedAdvice:false,
      id:null,
      advice:null,
    }
  }

  getNewAdvice() {
    const url = `https://api.adviceslip.com/advice`
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
      this.setState({
        id:data.slip.id,
        advice: data.slip.advice,
        loadedAdvice:true,
      })
    })
  }
  
  render() {
    return (
      <div>
         {
          this.state.loadedAdvice &&
          <div>
            <h2>#{this.state.id}</h2>
            <br></br>
            <h1>"{this.state.advice}"</h1>
          </div>
        }
          <div> 
           < Divider/>
          </div>
        <button type='button'
        onClick={() => this.getNewAdvice()}> 
          <Dice/>
        </button>
        </div>
    )
  }

}
function App() {
  return (
    <div className="App">
      <header>
      < Advice/>
      </header>
    
    </div>
  );
}

export default App;
