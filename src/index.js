import React from 'react';
import ReactDOM from 'react-dom';

function randomTextGenerator() {
	return 'Random Text';
}

const App = () => {
	const randomText = 'Random';

	const randomText2 = ['Random', 'Text', 'Generator'];

	const randomText3 = { text: 'damn' };

	return (
		<div>
			<h1 style={{ fontFamily: 'cursive' }}>Hi, there!</h1>
			<h1>{randomText}</h1>
			<p>{randomTextGenerator()}</p>
			<p>{randomText2}</p>
			<p>{randomText3.text}</p>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
