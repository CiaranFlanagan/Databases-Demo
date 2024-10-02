function GroceryItem({ item, toggleItemStatus }) {
  return (
    <li
      style={{ textDecoration: item.purchased ? 'line-through' : 'none' }}
      onClick={() => toggleItemStatus(item.id)}
    >
      {item.name}
    </li>
  );
}
export default GroceryItem;
