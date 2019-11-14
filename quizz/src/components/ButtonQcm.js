import React from "react"
import './ButtonQcm.css'


    class ButtonQcm extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                win: false,
                lost: false,
                buttonWinOrder: ''
            }
        }

        buttonWinOrder() {
            this.setState({
                buttonWinOrder: Math.floor(Math.random()*Math.floor(4)+1) 
            })
        }

        componentDidMount() {
            this.buttonWinOrder();
            } 

    render() {
        console.log(this.state.buttonWinOrder)
    return (   
        
    <div className='cardContent'>
  
        <div className= 'button-order'>
            <button
                onClick={event =>{this.setState({win: true});this.props.incrementScore();}}
                // id='winButton'
                style={{ order: this.state.buttonWinOrder }}
                className={this.state.win||this.state.lost?'winButton':'qcmButton'}
            >
                {this.props.correct_answer}
            </button>

            <button onClick={event =>this.setState({lost: true})} 
                className={this.state.lost?'lostButton':'qcmButton'} >{this.props.incorrect_answer[0]}
            </button>
        
        
        
            <button onClick={event =>this.setState({lost: true})}
                className={this.state.lost?'lostButton':'qcmButton'} >{this.props.incorrect_answer[1]}
            </button>

            <button onClick={event =>this.setState({lost: true})}
            
                className={this.state.lost?'lostButton':'qcmButton'} >{this.props.incorrect_answer[2]}
            </button>

        </div> 

        <div className={this.state.win?'imageWin':'noImage'} >
             <img className='winLogo' src={"https://i.ibb.co/bFwKdvc/gagne.png"} alt="Win" ></img>
             <div><button onClick={event =>{this.setState({win: false, lost :false});{this.props.getQuestions()};{this.buttonWinOrder()};{this.props.incrementQuestionNumber()}}}
             className='qcmButton'  >Next question</button></div>    
        </div> 
        <div className={this.state.lost?'imageLost':'noImage'}>
             <img className='lostLogo' src={"https://i.ibb.co/99nLRBf/lost.png"} alt="Lost" ></img> 
             
             <div><button onClick={event =>{this.setState({win: false, lost: false});{this.props.getQuestions()};{this.buttonWinOrder()};{this.props.incrementQuestionNumber()}}} className='qcmButton'>Next question</button>
             </div>    
        </div> 
    </div>
    )   
 }
}


export default ButtonQcm;


