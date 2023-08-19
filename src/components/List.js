// Imports
import ListItem from './ListItem';

const List = (props) => {
	let items = props.items;

	return (
		<ul id="myUL">
			{items.map((item, index) => <ListItem item={item} key={index} deleteItem={props.deleteItem} />)}
		</ul>
	);
};

export default List;
