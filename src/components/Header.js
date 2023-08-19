import { useState } from 'react';

const Header = ({ clickHandler, title }) => {
	/** PART 1 : Add Click event*/
	// function submitHandler() {
	// 	clickHandler(input);
	// 	setInput(' ');
	// }

	async function submitHandler() {
		await clickHandler(input);
		setInput(' ');
	}

	/** PART 2 : Store the input Text in state*/
	const [ input, setInput ] = useState('');

	return (
		<header className="header">
			<h2 style={{ margin: '5px' }}>{title}</h2>
			<input
				type="text"
				id="myInput"
				placeholder="Title..."
				onChange={(e) => setInput(e.target.value)}
				value={input}
			/>
			<span className="addBtn" onClick={submitHandler}>
				Add
			</span>
		</header>
	);
};

export default Header;
