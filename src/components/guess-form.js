import React from 'react';
import './guess-form.css';

export default function GuessForm() {
	return (
		<form>
			<input type="text" placeholder="Enter your Guess" />
			<button>Guess</button>
		</form>
	);
}