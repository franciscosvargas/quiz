import styled from 'styled-components'
import { Link } from 'react-router-dom'

// The components are in alphabetical order

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

export const Button = styled(Link)`
	align-items: center;
	border: solid 2px rgba(255,208,31, 1);
	color: rgba(255,208,31, 1);
	display: flex;
	font-family: 'Bree Serif', serif;
	font-size: 18px;
	height: 40px;
	padding: 0px 10px 0px 10px;
`

export const ButtonWrapper = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin: 10px 10px 0px 0px;

	@media (max-width: 350px) {
		flex-direction: column;
	}
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

export const QuizList = styled.div`
	display: flex;
	flex-grow: 1;
	flex-wrap: wrap;
	margin-top: 30px;
	
`
export const TextButton = styled(Link)`
	color: rgba(255,208,31, 1);
	font-family: 'Bree Serif', serif;
	font-size: 18px;
	margin-left: auto;

	
`
export const Title = styled.h1`
	color: rgba(255,208,31);
	font-family: 'Bebas Neue', cursive;
	font-size: 40px;
	letter-spacing: 2px;
`
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;

	@media (max-width: 1125px) {
		margin: 40px 0px 40px 0;
		width: 70%;
	}

	@media (max-width: 750px) {
		margin-top: 40px;
		width: 90%;
	}
`






