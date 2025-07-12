import { useState } from "react";

export default function MysticAIPlatform() {
  const [birthInfo, setBirthInfo] = useState({ date: "", time: "", place: "" });
  const [question, setQuestion] = useState("");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [activeTab, setActiveTab] = useState("bazi");

  const generatePrompt = () => {
    const { date, time, place } = birthInfo;
    const prompt = `Please generate a fortune reading based on the following information:\n
    - Birth Date: ${date}\n
    - Time of Birth: ${time}\n
    - Place of Birth: ${place}\n
    - Topic: ${question}\n
    - System: ${activeTab.toUpperCase()}`;
    setGeneratedPrompt(prompt);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>🔮 Mystic AI: Your Destiny Portal</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '1rem 0' }}>
        {['bazi', 'ziwei', 'astrology', 'tarot'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: activeTab === tab ? '#6c5ce7' : '#dfe6e9',
              color: activeTab === tab ? 'white' : 'black',
              border: 'none',
              borderRadius: '8px'
            }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>
      <input type="date" onChange={(e) => setBirthInfo({ ...birthInfo, date: e.target.value })} style={{ width: '100%', marginBottom: '0.5rem' }} />
      <input type="time" onChange={(e) => setBirthInfo({ ...birthInfo, time: e.target.value })} style={{ width: '100%', marginBottom: '0.5rem' }} />
      <input placeholder="Birth Place" onChange={(e) => setBirthInfo({ ...birthInfo, place: e.target.value })} style={{ width: '100%', marginBottom: '0.5rem' }} />
      <textarea placeholder="Ask a question" rows={4} onChange={(e) => setQuestion(e.target.value)} style={{ width: '100%', marginBottom: '1rem' }} />
      <button onClick={generatePrompt} style={{ padding: '0.5rem 1rem', backgroundColor: '#00cec9', border: 'none', borderRadius: '8px', color: 'white' }}>✨ Generate Prompt</button>
      {generatedPrompt && (
        <pre style={{ marginTop: '1rem', backgroundColor: '#f1f2f6', padding: '1rem', borderRadius: '8px', whiteSpace: 'pre-wrap' }}>
          {generatedPrompt}
        </pre>
      )}
    </div>
  );
}
