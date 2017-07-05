import React from 'react';

import './header.css';
import TopNav from './top-nav';

export default function Header() {
	return (
		<header>
			<TopNav></TopNav>
			<h1>HOT or COLD</h1>
		</header>
	);
}