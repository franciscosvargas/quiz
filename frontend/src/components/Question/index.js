import React from 'react'
import { connect } from 'react-redux'

import { Container, Title, Answer } from './styles'

function Question({info, active, key, current}) {
  return (
	  <Container active={active}>
		  <Title>{info.title}</Title>
		  {current > info.key && <Answer>Correct: {info.correct}</Answer>}
	  </Container>
  );
}

const mapStateToProps = state => ({
	current: state.quiz.current
});

export default connect(mapStateToProps)(Question);