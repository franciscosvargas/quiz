import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const Container = styled.div`
	align-items: center;
	color: #fafafa;
	display: flex;
	padding: 20px 0 20px 0;
	width: 100%;

`

export const Link = styled(LinkR)`
	color: ${props => props.white ? '#fff' : 'rgba(255,208,31)' };
	margin-left: ${props => props.ml ? '40px' : '0px' };
	font-family: 'Bebas Neue', cursive;
	font-size: 40px;
	font-weight: bold;
	letter-spacing: 2px;
	margin-left: ${props => props.ml && 'auto' };
	transition: all 0.5s ;

	:hover {
		color: rgb(0,215,255);
		
	}
`

export const ButtonsWrapper = styled.div`
	display: flex;
	margin-left: auto;

	@media (max-width: 900px) {
		display: ${props => props.mobile ? 'flex' : 'none' };
		flex-direction: column;
		margin: 20px 0px 20px 0px;

	}
`
