import styled from 'styled-components'
import { Form as Unform }  from '@unform/web'

export const Button = styled.button`
	background: none;
	color: #fff;
	cursor: pointer;
	display: flex;
	font-family: 'Bebas Neue', cursive;
	font-size: 30px;
	font-weight: bold;
	letter-spacing: 2px;
	margin-left: auto;
	margin-right: ${props => props.marginRight};
	margin-top: ${props => props.marginTop};
	

	:hover {
		opacity: 0.6;
	}

`
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0px 40px 30px 40px;
	width: calc(100% - 80px);

	@media (max-width: 900px) {
		padding: 0px 30px 30px 30px;
		width: calc(100% - 60px);
	}

	
`

export const Content = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	opacity: ${props => props.loading ? 0.4 : 1};
	transform: ${props => props.loading ? 'scale(0.8)' : 'none'};
	transition: all 5s;
`

export const Form = styled(Unform)`
	display: flex;
	flex-direction: column;
	margin: 0px 50px 0px 0px;
	flex-wrap: wrap;

	@media (max-width: 900px) {
		margin-top: 30px;
	}
`

export const Question = styled.button`
	background: none;
	color: rgba(255,208,31);
	cursor: pointer;
	font-family: 'Bebas Neue', serif;
	font-size: 25px;
	margin-top: 15px;
	text-align: start;
	transition: all 0.4s;

	:hover {
		color: rgba(255,0,0, 0.6);
	}
`

export const QuestionList = styled.div`
	display: flex;
	flex-direction: column;
`


export const Title = styled.h1`
	color: #fff;
	font-family: 'Bebas Neue', cursive;
	font-size: 30px;
	font-weight: bold;
	letter-spacing: 2px;
	display: flex;
`

export const Span = styled.span`
	color: rgba(255,208,31);
	font-family: 'Bebas Neue', serif;
	font-size: 25px;
	margin-top: 20px;
`