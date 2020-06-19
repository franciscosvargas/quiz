import React, { Component } from 'react'

//Importing services
import api from '../../services/api'

//Importing HomePage's styles
import {
	ButtonWrapper,
	Container,
	Image,
	Title, 
	QuizList,
	Wrapper,
	TextButton
} from './styles'

//Importing components
import { Quiz } from '../../components'

//Importing static files
import quizSVG from '../../assets/quiz.svg'
import database from '../../utils/db.json'

class Home extends Component {

	state = {
		quizes: database.quizzes
	}

	componentDidMount() {
		this.getQuizzes()
	}

	getQuizzes = async () => {
		const { data } = await api.get('/quiz/all')
		this.setState({
			quizes: data
		})
	}

	render() {
		return (
			<Container>
				<Image src={quizSVG} alt="People talking around the word" />
				<Wrapper>
					<Title >Find, Play and Challenge your Friends!</Title>
					<QuizList>
						{this.state.quizes.map((quiz, index) => (
							<Quiz key={index} info={quiz} />
						))}
					</QuizList>
					
					<ButtonWrapper>
						<TextButton to="/login">CREATE YOUR OWN</TextButton>
					</ButtonWrapper>
					
				</Wrapper>
			</Container>
		);
	}
}

export default Home

