import { useState } from 'react';
import GroceryItem from './GroceryItem.jsx';
import AddItemForm from './AddItemForm.jsx';

function GroceryList() {
  const [items, setItems] = useState([]); 

  const addItem = (item) => {
    setItems([...items, { id: Date.now(), name: item, purchased: false }]);
  };

  const toggleItemStatus = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    );
  };

  return (
    <div>
      <h2>Grocery List</h2>
      <AddItemForm addItem={addItem} />
      <ul>
        {items.map((item) => (
          <GroceryItem key={item.id} item={item} toggleItemStatus={toggleItemStatus} />
        ))}
      </ul>
    </div>
  );
}

export default GroceryList;
