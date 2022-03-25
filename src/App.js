import React from 'react';
import "./app.css"
import { SortingVisual } from './components/SortingVisual';
import { VStack, Heading, IconButton, useColorMode, Box, Center} from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { HelpModal } from './components/Modal'
import { AlgoModal } from './components/Modal';
import {BsGithub} from 'react-icons/bs'
import { useEffect } from 'react';

export default function App() {
	const { colorMode, toggleColorMode } = useColorMode();
	
	function ColorMode() {
		return (
			 <IconButton
					icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
					isRound='true'
					size='md'
					onClick={toggleColorMode}
					float={"right"}
				/>
		);
	}
																																																																																																																																																																																 
	return (
		<div className='main'>
			<div className='header'>
				<HelpModal/>
				<ColorMode />
			</div>
			<div className='body'>
				<Heading className='title'>
					Visual Algo
				</Heading>
				<SortingVisual />	
			</div>
			<Center className='footer'>
				<div className='links'>
					Links:
					<a id = 'github-link' href='https://github.com/waitingonalice/VisualAlgo'>
						Github
						<div id='gh-icon'><BsGithub size={20} /></div> 
					</a>
				</div>
				
			</Center>
		</div>		 
	);
}



