import React from "react"
import './ButtonQcm.css'


    class ButtonQcm extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                win: false,
                lost: false,
            }
        }
       

    render() {
    return (   
        
    <div className='cardContent'>
  
        <div className= 'button-order'>
            <button onClick={event =>{this.setState({win: true});this.props.incrementScore();}}
                id='winButton' className={this.state.win||this.state.lost?'winButton':'qcmButton'}>{this.props.correct_answer}
            </button>

            <button onClick={event =>this.setState({lost: true})} 
                className={this.state.lost?'lostButton':'qcmButton'} >{this.props.incorrect_answer[0]}
            </button>
        
        </div>
        <div>
        
            <button onClick={event =>this.setState({lost: true})}
                className={this.state.lost?'lostButton':'qcmButton'} >{this.props.incorrect_answer[1]}
            </button>

            <button onClick={event =>this.setState({lost: true})}
            
                className={this.state.lost?'lostButton':'qcmButton'} >{this.props.incorrect_answer[2]}
            </button>

        </div> 

        <div className={this.state.win?'imageWin':'noImage'} >
             <img className='winLogo' src={"https://i.ibb.co/bFwKdvc/gagne.png"} alt="Win" ></img>
             <div><button onClick={event =>{this.setState({win: false, lost :false});{this.props.getQuestions()};{this.props.incrementQuestionNumber()}}}
             className='qcmButton'  >Next question</button></div>    
        </div> 
        <div className={this.state.lost?'imageLost':'noImage'}>
             <img className='lostLogo' src={"https://i.ibb.co/99nLRBf/lost.png"} alt="Lost" ></img> 
             
             <div><button onClick={event =>{this.setState({win: false, lost: false});{this.props.getQuestions()};{this.props.incrementQuestionNumber()}}} className='qcmButton'>Next question</button>
             </div>    
        </div> 
    </div>
    )   
 }
}


export default ButtonQcm;


