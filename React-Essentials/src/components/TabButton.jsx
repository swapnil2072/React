export default function TabButton({ children, onSelect }) {
  function handleClick() {}
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
