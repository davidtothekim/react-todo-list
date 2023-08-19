import { useState } from 'react';

const Header = (props) => {
	/** PART 1 : Add Click event*/
	function submitHandler() {
		props.clickHandler(input);
	}

	/** PART 2 : Store the input Text in state*/
	const [ input, setInput ] = useState('');

	return (
		<header className="header">
			<h2 style={{ margin: '5px' }}>{props.title}</h2>
			<input type="text" id="myInput" placeholder="Title..." onChange={(e) => setInput(e.target.value)} />
			<span className="addBtn" onClick={submitHandler}>
				Add
			</span>
		</header>
	);
};

export default Header;
