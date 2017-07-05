import React from 'react';
import './guess-section.css';

import GuessForm from './guess-form';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default function GuessSection() {
	return (
		<div className="guess-section">
			<h2>Make your Guess!</h2>
			<GuessForm />
			<GuessCount />
			<GuessList />
		</div>
	);
		
}