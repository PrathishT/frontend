import { useState } from 'react';
import PodcastList from '../components/PodcastList';
import PodcastPlayer from '../components/PodcastPlayer';

export default function Home() {
  const samplePodcasts = [
    {
      title: 'Tech Talk Episode 1',
      description: 'Intro to AI and tech',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      title: 'Health Tips',
      description: 'Stay fit with simple routines',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
    {
      title: 'Startup Story',
      description: 'How a founder built a company',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    }
  ];

  const [selectedPodcast, setSelectedPodcast] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <PodcastList podcasts={samplePodcasts} onSelect={setSelectedPodcast} />
      <PodcastPlayer podcast={selectedPodcast} />
    </div>
  );
}