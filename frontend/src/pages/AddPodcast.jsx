import { useState } from 'react';

export default function AddPodcast() {
  const [podcast, setPodcast] = useState({
    title: '',
    description: '',
    audioUrl: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Podcast Added:\n${JSON.stringify(podcast, null, 2)}');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Add New Podcast</h2>
      <input
        type="text"
        placeholder="Title"
        value={podcast.title}
        onChange={(e) => setPodcast({ ...podcast, title: e.target.value })}
        required
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <textarea
        placeholder="Description"
        value={podcast.description}
        onChange={(e) => setPodcast({ ...podcast, description: e.target.value })}
        required
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <input
        type="url"
        placeholder="Audio URL"
        value={podcast.audioUrl}
        onChange={(e) => setPodcast({ ...podcast, audioUrl: e.target.value })}
        required
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <button type="submit">Add Podcast</button>
    </form>
  );
}