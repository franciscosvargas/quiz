import styled from 'styled-components'

export const Container = styled.div`
	align-items: center;
	background: #fafafa;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	opacity: ${props => props.active ? 1 : 0.4 };
	width: calc(100% - 30px);
	margin-top: 20px;
	padding: 15px;
	transition: all 1s;
`

export const Title = styled.div`
	color: rgba(0,0,0,0,5);
	font-family: 'Bree Serif', cursive;
	font-size: 20px;
	text-align: center;
`

export const Answer = styled.div`
	color: rgba(0,0,0,0,5);
	font-family: 'Bree Serif', cursive;
	font-size: 18px;
	text-align: center;
	font-style: italic;
	margin-top: 10px;
`



