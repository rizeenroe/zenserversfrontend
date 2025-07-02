import { log } from 'console';
import './App.css'
import React, { useEffect, useState } from 'react';

function App() {
  const [serverInfo, setServerInfo] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  fetch('http://localhost:3001/api/mc-status')
    .then((res) => res.json())
    .then(data => {
      console.log(data); 
      setServerInfo(data);  
    })
    .catch((err) => setError(err.message));
}, []);

  return (
    <div className="app-container">
      <h1>Zen Servers</h1>
      <div id='minecraft'>
        <img src="https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2020-06-image14-3.png" alt="" />
        <p>{serverInfo?.motd?.clean ?? "Loading MOTD..."}</p>
        <p>Host: {serverInfo?.srvRecord.host ?? "Loading..."}</p>
        <p>Port: {serverInfo?.srvRecord.port ?? "Loading..."}</p>
        <p>Version: {serverInfo?.version?.name ?? "Loading..."}</p>
        <p>Online: {serverInfo?.players?.online ?? 0} / {serverInfo?.players?.max ?? 0}</p>
        <a href="/downloads/minecraft/zen server 1.0.0.mrpack" download>
          Dwonload Modrinth Mod Pack
        </a>
      </div>
    </div>
  );

}
export default App;
