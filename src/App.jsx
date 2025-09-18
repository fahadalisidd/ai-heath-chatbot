// src/App.jsx
import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

// ------------------- Landing Page -------------------
function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6">
      <div className="max-w-5xl mx-auto flex flex-col justify-center items-center py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
          AI-Driven Public Health Chatbot
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10">
          Empowering rural and semi-urban populations with preventive healthcare, disease awareness, 
          and real-time vaccination alerts — accessible via WhatsApp & SMS.
        </p>
        <div className="flex flex-col md:flex-row gap-6 mb-20">
          <Link to="/login" className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg hover:scale-105 transition-transform">
            Get Started
          </Link>
          <Link to="/dashboard" className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg hover:scale-105 transition-transform">
            Know More
          </Link>
        </div>

        {/* Sections */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">The Problem</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Rural and semi-urban populations often lack access to timely healthcare information, 
            leading to missed vaccinations, delayed treatment, and poor awareness about disease prevention.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Solution</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We provide a multilingual AI chatbot accessible via WhatsApp or SMS that answers healthcare queries, 
            sends vaccination reminders, and issues real-time alerts about outbreaks.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">How It Works</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-300 max-w-3xl mx-auto text-left">
            <li>User interacts with the chatbot via WhatsApp or SMS.</li>
            <li>AI answers queries about symptoms, vaccinations, and preventive measures.</li>
            <li>Real-time alerts are sent from government health databases.</li>
            <li>Users can track their vaccination schedules and health updates.</li>
          </ol>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Impact</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our chatbot reaches 80% accuracy in answering health queries and increases awareness by 20% in target communities.
          </p>
        </section>
      </div>
    </div>
  );
}

// ------------------- Login Page -------------------
function LoginPage() {
  const [mode, setMode] = useState("steps");
  const navigate = useNavigate();

  const handleDirectLogin = (e) => {
    e.preventDefault();
    navigate("/chatbot"); // redirect to chatbot directly
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col justify-center items-center px-6">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-8">
        Login / Register
      </h2>
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setMode("steps")}
          className={`px-4 py-2 rounded-xl ${mode === "steps" ? "bg-cyan-600" : "bg-gray-700"}`}
        >
          Step Guide
        </button>
        <button
          onClick={() => setMode("direct")}
          className={`px-4 py-2 rounded-xl ${mode === "direct" ? "bg-purple-600" : "bg-gray-700"}`}
        >
          Direct Login
        </button>
      </div>
      {mode === "steps" ? (
        <ol className="space-y-4 max-w-md text-left">
          <li className="bg-gray-800 p-4 rounded-xl">1️⃣ Download the <b>Twilio WhatsApp</b> app.</li>
          <li className="bg-gray-800 p-4 rounded-xl">2️⃣ Save the Twilio WhatsApp number.</li>
          <li className="bg-gray-800 p-4 rounded-xl">3️⃣ Type <code>join &lt;code&gt;</code> and send.</li>
          <li className="bg-gray-800 p-4 rounded-xl">4️⃣ Type <code>register &lt;pincode&gt;</code> and send.</li>
        </ol>
      ) : (
        <form onSubmit={handleDirectLogin} className="bg-gray-800 p-6 rounded-2xl w-full max-w-sm space-y-4">
          <input type="text" placeholder="Phone Number"
            className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white outline-none focus:ring-2 focus:ring-cyan-400" required />
          <input type="text" placeholder="Pincode"
            className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white outline-none focus:ring-2 focus:ring-purple-400" required />
          <button type="submit"
            className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg hover:scale-105 transition-transform">
            Login
          </button>
        </form>
      )}
    </div>
  );
}

// ------------------- Dashboard -------------------
function Dashboard() {
  const queryData = [
    { date: "Sep 10", queries: 12 },
    { date: "Sep 11", queries: 18 },
    { date: "Sep 12", queries: 25 },
    { date: "Sep 13", queries: 20 },
    { date: "Sep 14", queries: 30 },
  ];
  const queryTypes = [
    { name: "Vaccination", value: 45 },
    { name: "Outbreaks", value: 30 },
    { name: "General Health", value: 15 },
    { name: "Other", value: 10 },
  ];
  const COLORS = ["#06b6d4", "#a855f7", "#f43f5e", "#22c55e"];

  const users = [
    { phone: "+91 9876543210", pincode: "560001", queries: 12 },
    { phone: "+91 9123456789", pincode: "110001", queries: 8 },
    { phone: "+91 9988776655", pincode: "400001", queries: 15 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-8">
        📊 Health Chatbot Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">👥 <b>Registered:</b> 120</div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">💬 <b>Queries:</b> 85</div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">📉 <b>Dropped:</b> 10</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h3 className="mb-4">Queries Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={queryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#555" />
              <XAxis dataKey="date" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Line type="monotone" dataKey="queries" stroke="#06b6d4" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h3 className="mb-4">Query Types</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={queryTypes} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                {queryTypes.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg overflow-x-auto">
        <h3 className="mb-4">Users</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="p-2">Phone</th>
              <th className="p-2">Pincode</th>
              <th className="p-2">Queries</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i} className="border-t border-gray-700">
                <td className="p-2">{u.phone}</td>
                <td className="p-2">{u.pincode}</td>
                <td className="p-2">{u.queries}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ------------------- Chatbot -------------------
function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I am your Health Assistant. Ask me anything about health, vaccination, or disease prevention." }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");

    // Sample bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "bot", text: "Thanks for your query! Our Health Bot is analyzing your question." }]);
    }, 800);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col">
      <div className="p-6 text-center text-3xl font-bold bg-gray-900 shadow-lg">💬 Health Chatbot</div>
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`px-4 py-2 rounded-2xl max-w-xs break-words shadow-md ${m.sender === "user" ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white" : "bg-gradient-to-r from-purple-600 to-pink-500 text-white"}`}>
              {m.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-6 bg-gray-900 flex gap-4 shadow-inner">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 focus:ring-cyan-400 transition"
          onKeyDown={e => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg hover:scale-105 transition-transform">
          Send
        </button>
      </div>
    </div>
  );
}

// ------------------- App -------------------
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}
