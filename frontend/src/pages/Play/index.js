import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

import * as QuizActions from '../../store/actions/quiz'

import {
	Container,
	Content,
	Wrapper,
} from './styles'

import { Current, Topbar, Question } from '../../components'

class Play extends Component {

	state = {
		title: "Loading....",
		questions: [],
		current: 0
	}


	isCurrent = (index) => {
		if(this.props.current === index) return true

		return false
	}

	componentDidMount() {
		if(!this.props.title)
			return this.props.history.replace('/')
	}

	render() {
		return (
			<Container>
				<Topbar title={this.props.title}/>

				<Content>
					<Wrapper>

						{this.props.questions.length > 0 && (
							<Current />
						)}
						
					</Wrapper>

					<Wrapper>
						{this.props.questions.map((info, index) => (
							this.isCurrent(index)
							? <Question active info={{...info, key: index}} key={index} />
							: <Question info={{...info, key: index}} key={index} />
						))}
					

					</Wrapper>
				</Content>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	questions: state.quiz.questions,
	title: state.quiz.title,
	current: state.quiz.current
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(QuizActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Play);

