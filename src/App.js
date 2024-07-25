import { useRef, useState } from "react";
import { Auth } from "./components/Auth";
import Cookies from "universal-cookie";
import { Chat } from "./components/Chat";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const roomInputValue = useRef(null);
  if (!isAuth) {
    return (
      <div className="App">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }
  return (
    <div className="">
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room">
          <label>Enter th Room Name :</label>
          <input ref={roomInputValue} />
          <button onClick={() => setRoom(roomInputValue.current.value)}>
            Enter Chat
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
