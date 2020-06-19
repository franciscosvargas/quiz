import styled from 'styled-components'

export const Container = styled.div`
	animation: cssAnimation 0s ease-in-out 1s alternate;
	animation-play-state: running;
	background-color: #fafafa;
	border-radius: 6px;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin: 10px 10px 10px 0px;
	opacity: 0.4;
	padding: 10px 20px 10px 20px;
	transition: all 0.2s;

	:hover {
		transform: scale(0.95);
		opacity: 0.97;
	}

	@keyframes cssAnimation {
		0% {
			opacity: 0.1;
		}

		100% {
			opacity: 1;
		}

	}

	@media (max-width: 900px) {
		opacity: 1;
	}
`

export const Title = styled.span`
	color: rgba(0,0,0,0.8);
	font-family: 'Bree Serif', serif;
	font-size: 20px;
`
export const Number = styled.span`
	color: rgba(0,0,0,0.6);
	font-family: 'Bree Serif', serif;
	font-size: 16px;
`
