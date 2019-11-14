import React from "react"
import './ButtonQcm.css'


class ButtonBool extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          win: false,
          lost: false,
          winT: false,
          lostT: false,
          winF: false,
          lostF: false
      }
  } 
  
  render() {
  return (
  <div className='cardContent'>
    <div>
      <button 
        onClick={event => 
          {(this.props.correct_answer === 'True')?this.setState({win: true}):this.setState({lost: true});
          (this.props.correct_answer === 'True')?this.setState({winT: true}):this.setState({lostT: true}) }
          }
          className='qcmButton'
          id={this.state.winT?'winButtonT':'qcmButton'&& this.state.lostT? 'lostButtonT':'qcmButton'}>True
      </button>

        
      <button
        onClick={event => 
          {(this.props.incorrect_answer[0] === 'True')?this.setState({win: true}):this.setState({lost: true});
          (this.props.incorrect_answer[0] === 'True')?this.setState({winF: true}):this.setState({lostF: true})} 
          } 
          className='qcmButton'
          id={this.state.winF ? 'winButtonF':'qcmButton' && this.state.lostF ? 'lostButtonF':'qcmButton'} >False
      </button>

    </div>

    <div className={this.state.win?'imageWin':'noImage'} >
             <img className='winLogo' src={"https://i.ibb.co/bFwKdvc/gagne.png"} alt="Win" ></img>
             <div><button onClick={event =>{this.setState({win:false,lost:false,winT:false,lostT:false,winF:false,lostF:false});{this.props.getQuestions()};{this.props.incrementQuestionNumber()}}}
             className='qcmButton'  >Next question</button></div>    
        </div> 
        <div className={this.state.lost?'imageLost':'noImage'}>
             <img className='lostLogo' src={"https://i.ibb.co/w6WWNRy/lost.png"} alt="Lost" ></img> 
             
             <div><button onClick={event =>{this.setState({win:false,lost:false,winT:false,lostT:false,winF:false,lostF:false});{this.props.getQuestions()};{this.props.incrementQuestionNumber()}}} className='qcmButton'>Next question</button>
             </div>    
        </div> 
  </div>
  )
}
}

export default ButtonBool;


//id={this.state.win?'winButton'}