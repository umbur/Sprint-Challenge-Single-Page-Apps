import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodesList() {
  let [content, setContent] = useState(null);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
        .then(res => {
          setContent(res.data);
        });
  }, []); // no dependencies needed

  if(!content) return <div>Communicating with Historians...</div>;

  return (
      <section className='episode-list grid-view'>
        {content.results.map(e => <EpisodeCard key={e.name} episode={e} />)}
      </section>
  );
}
