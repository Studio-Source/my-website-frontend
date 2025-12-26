import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    // This connects to your Vercel Backend running locally
    fetch('https://backend-flame-pi-64.vercel.app/api')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error("Error:", err))
  }, [])

  return (
    <div style={{ padding: "50px", textAlign: "center", fontFamily: "Arial" }}>
      <h1>My Full Stack Website</h1>
      
      {/* This section checks if backend data exists */}
      {data ? (
        <div style={{ border: "2px solid green", padding: "20px", display: "inline-block" }}>
          <h2 style={{ color: "green" }}>Backend Connected!</h2>
          <p><strong>Message:</strong> {data.message}</p>
          <p><strong>Server Time:</strong> {data.time}</p>
        </div>
      ) : (
        <h2 style={{ color: "red" }}>Connecting to Backend...</h2>
      )}
    </div>
  )
}

export default App
