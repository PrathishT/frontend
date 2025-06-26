export default function PodcastList({ podcasts, onSelect }) {
  return (
    <div>
      <h2>🎙 Podcast List</h2>
      {podcasts.map((podcast, index) => (
        <div
          key={index}
          onClick={() => onSelect(podcast)}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
            cursor: 'pointer'
          }}
        >
          <h3>{podcast.title}</h3>
          <p>{podcast.description}</p>
        </div>
      ))}
    </div>
  );
}