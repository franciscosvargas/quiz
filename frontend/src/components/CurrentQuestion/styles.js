import styled from 'styled-components'

export const Container = styled.div`
	align-items: center;
	background: ${props => props.color == 0 && '#fafafa' || props.color == 1 && 'rgba(0, 177, 106, 1)' || props.color == 2 && 'rgba(240, 52, 52, 1)'  };
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-grow: 1;
	margin: 20px 40px 0px 0px;
	padding: 20px;
	transition: background 1s;

	@media (max-width: 900px) {
		margin: 20px 0px 0px 0px;
	}

`
export const Title = styled.div`
	color: ${props => props.color == 0 ? 'rgb(92,62,131)' : '#fafafa' };
	font-family: 'Bebas Neue', cursive;
	font-size: 40px;
	text-align: center;
	transition: color 1s;

	@media (max-width: 450px) {
		font-size: 30px;
	}
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	
`
export const Answer = styled.button`
	background: none;
	color: rgba(0,0,0,0.6);
	cursor: pointer;
	font-family: 'Bree Serif', cursive;
	font-size: 25px;
	margin-top: 10px;

	@media (max-width: 450px) {
		font-size: 20px;
	}
`