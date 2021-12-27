import Cart from "./components/Cart";
import Counter from "./components/Counter";
import Info from "./components/Info";
import RandomGifts from "./components/RandomGifts";
import TodoList from "./components/TodoList";
import TwoWayBindings from "./components/TwoWayBindings";
import UpdateTitle from "./components/UpdateTitle"
import DOMEvents from "./components/DOMEvents"
import { useState } from "react";
function App() {
  const [isShow, setIsShow] = useState(false);
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
      {isShow && <DOMEvents />}
    </div>
  );
}

export default App;

