/*
import { useState } from 'react';

export default function UploadForm({ onUpload }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/podcasts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: Bearer ${localStorage.getItem('token')}
      },
      body: JSON.stringify({ title, description, audioUrl })
    });
    const data = await res.json();
    if (res.ok) {
      alert('Podcast uploaded!');
      onUpload(data);
      setTitle(''); setDescription(''); setAudioUrl('');
    } else {
      alert(data.msg || 'Upload failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Upload New Podcast</h3>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
      <input value={audioUrl} onChange={e => setAudioUrl(e.target.value)} placeholder="Audio URL" required />
      <button type="submit">Upload</button>
    </form>
  );
}
*/