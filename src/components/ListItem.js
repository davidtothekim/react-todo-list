const ListItem = (props) => {
	function clickHandler() {
		props.deleteItem(props.item);
	}

	return (
		<li key={props.idx}>
			{props.item}{' '}
			<span className="close" onClick={clickHandler}>
				×
			</span>{' '}
		</li>
	);
};

export default ListItem;
