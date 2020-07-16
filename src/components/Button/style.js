import styled from 'styled-components';
// import { key } from 'styled-theme';

import {
	getSize,
	getShape,
	getType,
	getModel,
} from './types';

export const Styled = styled.button`
	position: relative;
	&:focus {
		outline: none;
	}

	${({ size }) => getSize(size)}
	${({ shape }) => getShape(shape)}
	${({ type }) => getType(type)}
	${({ model }) => getModel(model)}
`;

export const Content = styled.span`
	${({ loading }) => loading && `
		opacity: 0;
	`}
`;

export const ShadowContent = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;
