import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

import * as QuizActions from '../../store/actions/quiz'

import { 
	Answer,
	Container,
	Title,
	Wrapper
} from './styles';

function CurrentQuestion({info, next, questions, current, finish}) {
	const [isCorrect, setIsCorrect] = useState(0)
	const [count, setCounter] = useState(0)
	const [loading, setLoading ] = useState(false)

	const processAnswer = (answer) => {
		if(answer === info.correct) {
			setIsCorrect(1)
			setCounter(count+1)
		} else {
			setIsCorrect(2)
		}

		if((current + 1) >= questions.length) {
			return finish()
		}	

		setTimeout(() => {
			nextQuestion()
		}, 1000);
	}

	const nextQuestion = () => {
		setLoading(true)

		setTimeout(() => {
			next()
			setIsCorrect(0)
		}, 250);

		setTimeout(() => {
			
			setLoading(false)
			
		}, 1000);
	}

	return (
		<Container className={loading && 'animation'} color={isCorrect}>
			<Title color={isCorrect} >{info.title}</Title>

			<Wrapper>
				{info.answers.map((answer, index ) => (
					<Answer 
						color={isCorrect}
						onClick={() => processAnswer(answer)} 
						key={index}>{answer}</Answer>
				))}
				
			</Wrapper>
		</Container>
	)
}

const mapStateToProps = state => ({
	questions: state.quiz.questions,
	current: state.quiz.current,
	info: state.quiz.questions[state.quiz.current],
	
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(QuizActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(CurrentQuestion);