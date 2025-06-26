import React from 'react';

export default function PodcastPlayer({ podcast }) {
  if (!podcast) return <p>Select a podcast to play</p>;

  return (
    <div>
      <h2>Now Playing: {podcast.title}</h2>
      <audio controls src={podcast.audioUrl}></audio>
    </div>
  );
}