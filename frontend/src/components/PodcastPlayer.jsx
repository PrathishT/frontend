export default function PodcastPlayer({ podcast }) {
  if (!podcast) return <p>Select a podcast to play.</p>;

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>🎧 Now Playing: {podcast.title}</h2>
      <audio controls src={podcast.audioUrl} style={{ width: '100%' }} />
    </div>
  );
}