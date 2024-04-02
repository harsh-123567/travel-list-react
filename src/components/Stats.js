export function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding items to packing list.🚀</em>
      </p>
    );
  }

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have packed everything! Ready to go🛩️"
          : `💼 You have ${numItems} items in your list and you have packed ${packedItems} items (${percentage}%).`}
      </em>
    </footer>
  );
}
