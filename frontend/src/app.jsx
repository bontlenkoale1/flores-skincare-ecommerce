import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Testing connection...");

  useEffect(() => {
    fetch("/api/health")
      .then((response) => {
        console.log("Response:", response);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        console.log("Backend response:", data);
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Backend connection error:", error);
        setMessage(`Backend error: ${error.message}`);
      });
  }, []);

  return (
    <div>
      <h1>Flores Skincare 🌸</h1>
      <p>Backend Status: {message}</p>
    </div>
  );
}

export default App;