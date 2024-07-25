import {
  addDoc,
  collection,
  onSnapshot,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";

export const Chat = ({ room }) => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messageref = collection(db, "messages");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;

    await addDoc(messageref, {
      text: newMessage,
      createedAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room: room,
    });
    setNewMessage("");
  };
  useEffect(() => {
    const quryMessage = query(messageref, where("room", "==", room));
    const unsunscribe = onSnapshot(quryMessage, (snap) => {
      let messages = [];
      snap.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsunscribe();
  }, []);
  return (
    <div className="">
      <div>
        {messages.map((data) => (
          <div key={data.id}>
            <span>{data.user} : </span>
            {data.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="">
        <input
          placeholder="Type Here..."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
};
