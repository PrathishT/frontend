import { useState } from 'react';
import PodcastList from '../components/PodcastList';
import PodcastPlayer from '../components/PodcastPlayer';

export default function Home() {
  const [selectedPodcast, setSelectedPodcast] = useState(null);

  return (
    <div>
      <h1>🎧 Podcast Library</h1>
      <PodcastList onSelect={setSelectedPodcast} />
      <PodcastPlayer podcast={selectedPodcast} />
    </div>
  );
}