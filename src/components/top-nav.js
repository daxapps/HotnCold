import React from 'react';

import './top-nav.css';
import Header from './header';

export default function TopNav() {
	return (
		<nav>
			<ul>
				<li>
					<a class="what" href="#">What?</a>
					<a class="new" href="#">+ New Game</a>
				</li>
			</ul>
		</nav>
		)
}