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
import { useState } from "react";
function App() {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setIsShow(!isShow)}>Toggle</button>
      {/* <Counter />
      <Cart />
      <Info /> */}
      {/* <RandomGifts /> */}
      {/* <TwoWayBindings /> */}
      {/* <TodoList /> */}
      {/* <UpdateTitle /> */}
      {/* {isShow && <DOMEvents />} */}
      {/* {isShow && <Timer />} */}
      {/* {isShow && <PreviewAvatar />} */}
      {/* {isShow && <FakeComment />} */}
      {isShow && <LearningMemo />}
    </div>
  );
}

export default App;

