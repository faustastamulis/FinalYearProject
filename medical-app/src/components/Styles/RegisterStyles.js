import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const RegisterSection = styled.section`
	height: 100vh;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const RegisterImage = styled.image`
	object-fit: cover;
	width: 100%;
	height: 100%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	top: 0;
	position: absolute;
	z-index: -1;
`;

export const RegisterButton = styled(Button)`
	color: black;

	&:before {
		background: #FFF;
		height: 500%;
	}

	&:hover:before {
		height: 0%;
	}

	&:hover {
		color: #FFF;
	}
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`;

export const InputSection = styled.input`
width: 100%;
`
