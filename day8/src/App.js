import React from "react";
import "./App.css";

function StatCard({ icon, label, number }) {
  return (
    <div className="stat-card">
      <div className="stat-line">
        <span>{icon}</span>
        <strong>{label}</strong>
      </div>
      <p>{number.toLocaleString()}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <StatCard icon="👉" label="Points" number={3000} />
      <StatCard icon="⚡" label="Lightnings" number={6540} />
      <StatCard icon="🤙" label="Shakas" number={337010} />
      <StatCard icon="💎" label="Diamonds" number={98661} />

      
    </div>
  );
}

export default App;
