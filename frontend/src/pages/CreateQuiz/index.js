import React, { Component } from 'react'

import api from '../../services/api'

import {
	Button,
	Container,
	Content,
	Question,
	QuestionList,
	Title,
	Form,
	Span
} from './styles'

//Importing components
import { Input } from '../../components'

import { Topbar } from '../../components'

class CreateQuiz extends Component {

	state = {
		questions: [],
		loading: 0
	}

	newQuestion = (question) => {
		const questions = this.state.questions
		questions.push(question)
		
		this.setState({
			questions
		})
	}

	removeQuestion = (index) => {
		const questions = this.state.questions
		questions.splice(index, 1);

		this.setState({
			questions
		})
	}

	createQuiz = async (general) => {
		this.setState({
			loading: 1
		})

		const questions = this.state.questions
		const { data } = await api.post('/l/quiz', { general, questions })

		if(!data.error) this.props.history.push('/')

		this.setState({
			loading: 0
		})
	}

	render() {
		return (
			<Container>
				<Topbar />
				<Content loading={this.state.loading}>

					<Form onSubmit={this.createQuiz}>
						<Title>General informations</Title>

						<Span>Title</Span>
							<Input 
								name="title"
								placeholder="Insert a title" />

						<Span>Description</Span>
						<Input 
							name="description"
							placeholder="Insert a description" />

						<Span>Tags</Span>
						<Input 
							name="tags"
							placeholder="Insert tags separeted by ;" />

						{this.state.questions.length > 0 && (
							<Button marginTop="30px" marginRight="auto">PUBLISH YOUR QUIZ</Button>
						)}
					</Form>

					{/* New Question Form */}
					<Form onSubmit={this.newQuestion}>
						<Content>
							<Title>New Question</Title>
							<Button type="submit">ADD</Button>
							
						</Content>

						<Span>Question title</Span>
						<Input 
							name="title"
							required
							placeholder="Insert a title" />

						<Span>Answer Correct</Span>
						<Input 
							name="answers[0]"
							required
							placeholder="Insert a description" />

						<Span>Answer 2</Span>
						<Input 
							name="answers[1]"
							required
							placeholder="Insert a description" />

						<Span>Answer 3</Span>
						<Input 
							name="answers[2]"
							required
							placeholder="Insert a description" />
						
						<Span>Answer 4</Span>
						<Input 
							name="answers[3]"
							required
							placeholder="Insert a description" />
					</Form>
					
					{this.state.questions.length > 0 && (
						<QuestionList>
							<Title>Questions</Title>

							{this.state.questions.map((question, index) => (
								<Question 
									key={index}
									onClick={() => {this.removeQuestion(index)}}
									>
										{question.title}
								</Question>
							))}
						</QuestionList>
					)}
					

					

				</Content>
					
			</Container>
		);
	}
}

export default CreateQuiz

