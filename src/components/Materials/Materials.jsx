export const Material = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.title}
          <button type="button" onClick={() => onDelete(item.id)}>
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};
