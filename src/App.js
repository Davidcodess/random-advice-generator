
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
            <h2> Advice #{this.state.id}</h2>
            <h1>"{this.state.advice}"</h1>
          </div>
        }
        <div className='divider-container'>
          < Divider className='divider-svg'/>
        </div>
        
    
        <button className='dice-btn' type='button'
        onClick={() => this.getNewAdvice()}> 
        <div>
        <Dice className='dice-svg'/>
        </div>
         
        </button>
        </div>
    )
  }

}
function App() {
  return (
    <div className="App">
      <header>
        <div className='app-body-container'>
          <div className='loaded-advice-container'>
            < Advice/>
          </div> 
        </div>
      
      </header>
    
    </div>
  );
}

export default App;
