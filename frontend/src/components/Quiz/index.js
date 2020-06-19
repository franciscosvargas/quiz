import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

import * as QuizActions from '../../store/actions/quiz'

import { 
	Container,
	Title,
	Number
} from './styles';

function Quiz({info, request}) {
	return (
		<Container onClick={() => request({number: info.number}) }>
			<Title>{info.title}</Title>
			<Number>#{info.number}</Number>
		</Container>
	);
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(QuizActions, dispatch);

export default connect(null, mapDispatchToProps)(Quiz);