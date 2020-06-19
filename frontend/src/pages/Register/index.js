import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

import * as actions from '../../store/actions/register'

//Importing HomePage's styles
import {
	Button,
	ButtonWrapper,
	Container,
	Form,
	Image,
	Span,
	Title, 
	Wrapper,
	Subtitle,
	Link,
} from './styles'

//Importing components
import { Input } from '../../components'

//Importing static files
import quizSVG from '../../assets/quiz.svg'

class Register extends Component {
	render() {
		return (
			<Container>
				<Image src={quizSVG} alt="People talking around the word" />
				<Wrapper>
					{/* Change the title when the resquest is loading */}
					<Title>{!this.props.isLoading ? 'CREATE AN ACCOUNT' : 'Loading...'}</Title>
					<Subtitle>{this.props.error}</Subtitle>

					{/* Hide Form on Loading */}
					{!this.props.isLoading && (
						<Form onSubmit={this.props.request}>
							<Span>Email</Span>
							<Input 
								name="email"
								placeholder="Insert a valid email" />

							<Span>Username</Span>
							<Input 
								name="username"
								placeholder="Insert a funny username" />

							<Span>Password</Span>
							<Input 
								name="password"
								placeholder="Insert a strong password" />

							<ButtonWrapper>
								<Button type="submit">REGISTER</Button>
								<Link to="/login">BACK</Link>
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
  bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);

