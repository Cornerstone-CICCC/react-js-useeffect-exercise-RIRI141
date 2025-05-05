import { use, useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState<string>("");
  const [likes, setLikes] = useState<number>(0);
  const [color, setColor] = useState<string>("red")

  useEffect(() => {
      console.log(message);
  }, [message]);

  useEffect(() => {
    if (likes !== 0) alert(`Likes updated to ${likes}`);
  }, [likes]);

  useEffect(() => {
    console.log(`Now you are ${color}`)
  },[color])
  const handleToggleColor = () => {
    setColor((prevState) => 
      (prevState === "red" ? "blue" : "red"))
  }

  return (
    <div>
      <h2>Message Logger</h2>
      <button onClick={() => setMessage("Hello from React!")}>Send Message</button>

      <h2>Like Counter</h2>
      <button onClick={() => setLikes((prev => prev + 1))}>Like</button>

      <h2>Color Box</h2>
      <button onClick={handleToggleColor}>Change Color</button>
      <div style={{ width: 100, height: 100, backgroundColor: color }}>Color Box</div>
    </div>
  );
};

export default App;
