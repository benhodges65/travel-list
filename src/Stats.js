export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>You have no items on your list</em>
      </footer>
    );

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percPackedItems = Math.round((numPackedItems / numItems) * 100) || 0;
  return (
    <footer className="stats">
      <em>
        You have {numItems} {numItems !== 1 ? "items" : "item"} on your list,
        and you already packed {numPackedItems} ({Math.round(percPackedItems)}%)
      </em>
    </footer>
  );
}
