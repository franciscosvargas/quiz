  
import styled from 'styled-components';

export const Container = styled.input`
	background: none;
	border-bottom: 2px solid rgba(255,255,255,0.7);
	color:  #fff;
	display: flex;
	font-family: 'Bree Serif', serif;
	font-size: 18px;
	max-height: 100px;
	padding: 10px 0 10px 0;
	width: 350px;

	::placeholder {
		color: rgba(255,255,255,0.8)
	}

	@media (max-width: 400px) {
		width: 300px;
	}

	@media (max-width: 350px) {
		width: 250px;
	}
	
`;