import React from "react"
import axios from "axios"
import './CardQuestion.css'
import ButtonQcm from './ButtonQcm'
import ScoreQcm from './ScoreQcm'
import Question from './Question'

class CardQuestion extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            arrayQuestions: [],
            count: 0,
        }
        this.incrementScore = this.incrementScore.bind(this)  
        this.getQuestions = this.getQuestions.bind(this) 
            };

    componentDidMount() {
	    this.getQuestions();
	    } 

    getQuestions() {
        axios
            .get(`https://opentdb.com/api.php?amount=1&category=${this.props.location.state.categoryId}&difficulty=easy&type=multiple`)
            .then(response => response.data)
            .then(data => {this.setState({arrayQuestions: data.results});});	
        }

    incrementScore() {
        this.setState({
            count: this.state.count + 10
        })
        }  
   
    render() {
        console.log(this.props)
        console.log(this.state.arrayQuestions)
    return (
    <>    
    <div className='cardContent'id="cardContentQcm">
        
        <figure className='imageContainer'>
            <img className='imageCategory' alt='category'  src="http://data-cache.abuledu.org/512/logo-de-la-geographie-504bb9b4.jpg"></img>
        </figure>

        <hr className='ligneSection'></hr>

        <ScoreQcm count={this.state.count}/>

        {this.state.arrayQuestions.map(quest => <Question question = {quest.question}/>)}

        <p>Choose the correct answer</p>

        <div id='buttonQcmContainer'>
            {this.state.arrayQuestions.map(q => 
                {console.log(q) ;
                    return <ButtonQcm correct_answer = {q.correct_answer} incorrect_answer = {q.incorrect_answers} 
                    incrementScore = {this.incrementScore} getQuestions={this.getQuestions}/>}
           
             )}
            
        </div>
        
    </div>
   </> )
}}

export default CardQuestion;
