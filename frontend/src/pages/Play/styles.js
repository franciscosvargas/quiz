import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	height: calc(100% - 20px);

	flex-direction: column;
	padding: 0px 40px 20px 40px;
	width: calc(100% - 80px);
	
	
`
export const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: 100%;
	padding-bottom: 20px;
`
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;

	@media (max-width: 900px) {
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
		padding-bottom: 20px;
	}
`

