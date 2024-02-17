
"use client"
import React, { useState, useEffect } from 'react';
import Layout from './Components/Layout';
import { fetchChannelListings } from './api/stream';

export default function Home() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    async function loadData() {
      const channels = await fetchChannelListings();
      setChannels(channels);
    }

    loadData();
  }, []);

  return (
    <Layout>
      <h1>Channel Listings</h1>
      <div>
        {channels.map((channel) => (
          <div key={channel.id}>
            <h2>{channel.name}</h2>
            <p>{channel.description}</p>
          </div>
        ))}
      </div>
    </Layout>
    
  );
}
