import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

import * as LoginActions from '../../store/actions/login'

//Importing HomePage's styles
import {
	Button,
	ButtonWrapper,
	Container,
	Form,
	Image,
	Span,
	Subtitle,
	Title, 
	Wrapper,
	Link
} from './styles'

//Importing components
import { Input } from '../../components'

//Importing static files
import quizSVG from '../../assets/quiz.svg'
import database from '../../utils/db.json'

class Login extends Component {

	state = {
		quizes: database.quizes
	}

	render() {
		return (
			<Container>
				<Image src={quizSVG} alt="People talking around the word" />
				<Wrapper>
					{/* Change the title when the resquest is loading */}
					<Title>{!this.props.isLoading ? 'SIGN IN' : 'Loading...'}</Title>
					<Subtitle>{this.props.error}</Subtitle>
					
					{/* Hide Form on Loading */}
					{!this.props.isLoading && (
						<Form onSubmit={this.props.request}>
							<Span>Username</Span>
							<Input 
								name="username"
								placeholder="Insert your username" />

							<Span>Password</Span>
							<Input 
								name="password"
								placeholder="Insert your password" />

							<ButtonWrapper>
								<Button type="submit">ENTER</Button>
								<Link to="/register">CREATE AN ACCOUNT</Link>
								<Link to="/">BACK</Link>
							</ButtonWrapper>
						</Form>
					)}
				</Wrapper>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	isLoading: state.user.loading,
	error: state.user.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

