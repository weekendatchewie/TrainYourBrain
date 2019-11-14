import React from "react"
import './ButtonQcm.css'


class ButtonBool extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          win: false,
          lost: false,
      }
      this.checkTrue = this.checkTrue.bind(this)
      this.checkFalse = this.checkFalse.bind(this)
      this.nextQuestion = this.nextQuestion.bind(this)
  }
  
  checkTrue() {
    (this.props.correct_answer === 'True')
      ? this.setState({win: true})
      : this.setState({lost: true})
  }
  
  checkFalse() {
    (this.props.incorrect_answer[0] === 'True')
      ? this.setState({win: true})
      : this.setState({lost: true})
  }

  nextQuestion() {
    this.setState({win: false, lost :false});
    this.props.getQuestions();
    this.props.incrementQuestionNumber()
  }
  
  render() {
    
  return (
  <div className='cardContent'>
    <div>
      <button 
        onClick={this.checkTrue} className='qcmButton'>True
      </button>

      <button
        onClick={this.checkFalse} className='qcmButton'>False
      </button>
    </div>

    <div className={this.state.win?'imageWin':'noImage'} >
      <img className='winLogo' src={"https://i.ibb.co/bFwKdvc/gagne.png"} alt="Win" ></img>         
    </div> 
    <div className={this.state.lost?'imageLost':'noImage'}> 
      <img className='lostLogo' src={"https://i.ibb.co/w6WWNRy/lost.png"} alt="Lost" ></img>    
    </div> 
    <div>
      <button onClick={this.nextQuestion} className='qcmButton'>Next question</button>
    </div>
  </div>
  )
}
}

export default ButtonBool;
