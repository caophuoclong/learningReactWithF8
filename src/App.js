import Cart from "./components/Cart";
import Counter from "./components/Counter";
import Info from "./components/Info";
import RandomGifts from "./components/RandomGifts";
import TodoList from "./components/TodoList";
import TwoWayBindings from "./components/TwoWayBindings";
import UpdateTitle from "./components/UpdateTitle"
import DOMEvents from "./components/DOMEvents"
import Timer from "./components/Timer"
import PreviewAvatar from "./components/PreviewAvatar"
import FakeComment from "./components/FakeComment";
import LearningMemo from "./components/LearningMemo"
import UseReducer from "./components/useReducer"
import { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext"
function App() {
  const [isShow, setIsShow] = useState(true);
  const themeContext = useContext(ThemeContext);

  return (
    <div className={themeContext.theme}>
      <button onClick={() => setIsShow(!isShow)}>Toggle</button>
      <button style={{ maginLeft: "15px" }} onClick={themeContext.toggleTheme}>Toggle Theme</button>
      {/* <Counter />
      <Cart />
      <Info />
      <RandomGifts />
      <TwoWayBindings />
      <TodoList />
      <UpdateTitle />
      {isShow && <DOMEvents />}
      {isShow && <Timer />}
      {isShow && <PreviewAvatar />}
      {isShow && <FakeComment />}
      {isShow && <LearningMemo />} */}
      {isShow && <UseReducer />}
    </div>
  );
}

export default App;

