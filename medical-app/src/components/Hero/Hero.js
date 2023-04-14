import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroSection, HeroText, ButtonWrapper, HeroButton, HeroImage } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<Container>
				<HeroImage></HeroImage>
				<MainHeading>Welcome to ATU Medical</MainHeading>
				<HeroText>
					Here we make booking appointments easy
				</HeroText>
				<ButtonWrapper>
					<Link to="../register">
						<Button>Get Started</Button>
					</Link>
					<Link to="../about">
					<HeroButton>Find out More</HeroButton>
					</Link>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;