import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
import { Form as Unform }  from '@unform/web'

// The components are in alphabetical order

export const Button = styled.button`
	background: none;
	color: rgba(255,208,31, 1);
	cursor: pointer;
	font-family: 'Bree Serif', serif;
	font-size: 18px;
	margin-top: 10px;
	text-align: start;
`
export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 30px 10px 0px 0px;

`

export const Container = styled.div`
	align-items: center;
	display: flex;
	height: 100%;
	justify-content: space-evenly;
	padding: 0 20px 0px 20px;
	width: calc(100% - 40px);

	@media (max-width: 1100px) {
		flex-direction: column;
		justify-content: initial;
		height: calc(100% - 60px);
		padding: 30px 20px 30px 20px;
	}
`

export const Form = styled(Unform)`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
`

export const Image = styled.img`
	height: 230.10px;
	width: 550px;

	@media (max-width: 650px) {
		height: 230px;
		margin-top: 40px;
		width: 400px;
	}

	@media (max-width: 415px) {
		height: 230px;
		width: 350px;
	}

	@media (max-width: 350px) {
		height: 230px;
		width: 250px;
	}
`
export const Span = styled.span`
	color: rgba(255,208,31);
	font-family: 'Bebas Neue', serif;
	font-size: 25px;
	margin-top: 20px;

`;

export const Subtitle = styled.h2`
	color: rgba(255,255,255);
	font-family: 'Bree Serif', cursive;
	font-size: 20px;
	letter-spacing: 2px;
	text-transform: italic;
`

export const Title = styled.h1`
	color: rgba(255,208,31);
	font-family: 'Bebas Neue', cursive;
	font-size: 40px;
	letter-spacing: 2px;
`

export const Link = styled(LinkR)`
	color: rgba(255,208,31, 1);
	font-family: 'Bree Serif', serif;
	font-size: 18px;
	margin-top: 10px;
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 1125px) {
		margin: 40px 0px 40px 0;
		width: 70%;
	}

	@media (max-width: 750px) {
		margin-top: 40px;
		width: 90%;
	}
`


