import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const listItems = [
    "Hit the gym",
    "Pay bills",
    "Meet George",
    "Buy eggs",
    "Read a book",
    "Organize office",
  ];

  {/** PART 2: Add listItems into state*/}
  const [items, setItems] = useState(listItems);

  const clickHandler = (item) => {
    addItem(item)
  };

  const addItem = (item) => {
    setItems([...items, item]);
  }

  const deleteItem = (item) => {
    setItems(items.filter((listItem) => item !== listItem ))
  }

  return (
    <>
      {/** PART 2: Pass clickHandler to the Header */}
      <Header title="My Notes" clickHandler={clickHandler}/>
      <List items={items} deleteItem = {deleteItem}/>
    </>
  );

}

export default App;
