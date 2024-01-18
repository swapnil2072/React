import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { UseSelector, useSelector } from "react-redux";

function App() {
  const show = useSelector((state) => state.isAuthenticated);
  return (
    <>
      {show ? (
        <>
          <Header></Header>
          <UserProfile />
        </>
      ) : (
        <Auth />
      )}
      <Counter />
    </>
  );
}

export default App;
