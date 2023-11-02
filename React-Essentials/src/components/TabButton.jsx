export default function TabButton({ children }) {
  function handleClick() {  }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
