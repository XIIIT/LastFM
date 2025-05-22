import React from 'react';
import TrackItem from '../TrackItem/TrackItem';
import './trackList.css';

const TrackList = () => {
    const tracks = [
        {
          title: "Don't Say You Love Me",
          artist: "Jin",
          tags: ["rap", "bis", "hip hop"],
          image_url: "https://lastfm.freetls.fastly.net/i/u/300x300/a363a7b06089ccc1d7c86c8a4068be4f.jpg"
        },
        {
          title: "Mona Lisa",
          artist: "j-hope",
          tags: ["loveuhobi", "song of the year"],
          image_url: "https://lastfm.freetls.fastly.net/i/u/300x300/4136777ceafd7fbabd678cda84320489.jpg"
        },
        {
          title: "Who",
          artist: "Jimin",
          tags: ["soy", "jimin", "pop"],
          image_url: "https://lastfm.freetls.fastly.net/i/u/300x300/ba49400a833014018741823543adf8dd.jpg"
        },
        {
            title: "Stop The Rain (TABLO X RM)",
            artist: "Tablo",
            tags: ["rm","rap","hip-hop"],
            image_url: "https://lastfm.freetls.fastly.net/i/u/300x300/2d69b448d1e61fbe4fe928d6152f8a68.jpg"
        },
        {
            title: "Haegeum",
            artist: "Agust D",
            tags: ["agustd","haegeum","rap"],
            image_url: "https://lastfm.freetls.fastly.net/i/u/300x300/da82d173ad56390cc8bb8f173466012f.jpg"
        },
        {
            title: "Winter Ahead (with PARK HYO SHIN)",
            artist: "V",
            tags: ["jazz","taetae","the man is art"],
            image_url: "https://lastfm.freetls.fastly.net/i/u/300x300/150993766fe3c42be64b13bd90907e8d.jpg"
        },
        {
            title: "FAKE LOVE",
            artist: "BTS",
            tags: ["bts","k-pop","kpop"],
            image_url: "https://lastfm.freetls.fastly.net/i/u/300x300/1c1100b20e2eb165f9093a8b6ca5a6ed.jpg"
        },
        {
            title: "Gnarly",
            artist: "KATSEYE",
            tags: ["hyperpop","deconstructed club"],
            image_url: "https://lastfm.freetls.fastly.net/i/u/300x300/20ed6fffe73484e199999d06ff95b410.jpg"
        },
        {
            title: "Seven (feat. Latto) (Explicit Ver.)",
            artist: "Jung Kook",
            tags: ["pop","horny","turn it off🔥🔥"],
            image_url: "https://lastfm.freetls.fastly.net/i/u/300x300/f19c148dc2502de161e9835f140a8114.jpg"
        },
        {
            title: "Tonight",
            artist: "PinkPantheress",
            tags: ["dance-pop","bassline","speed garage"],
            image_url: "https://lastfm.freetls.fastly.net/i/u/300x300/76c86b2d36adf00fabbd157d5cc0d697.jpg"
        },
        {
            title: "party 4 u",
            artist: "Charli xcx",
            tags: ["electropop","hyperpop","bubblegum bass"],
            image_url: "https://lastfm.freetls.fastly.net/i/u/300x300/f18b8f5ca083f7f9e86ceed75304e2e5.jpg"
        },
        {
            title: "like JENNIE",
            artist: "Jennie",
            tags: ["funk mandelao","funk automotivo","funk"],
            image_url: "https://lastfm.freetls.fastly.net/i/u/300x300/5b344e792abff0b84e203e5581021d4d.jpg"
        },
        {
            title: "Baller",
            artist: "Abor & Tynna",
            tags: ["eurovision","eurovision song contest"],
            image_url: "https://lastfm.freetls.fastly.net/i/u/300x300/84d58dc00cc08a447893268e4788157b.jpg"
        },
        // ... остальные треки
        {
          title: "Nope your too late i already died",
          artist: "wifiskeleton",
          tags: ["alternative rock", "indie rock", "slacker rock"],
          image_url: "https://lastfm.freetls.fastly.net/i/u/300x300/4128a6eb29f94943c9d206c08e625904.jpghttps://lastfm.freetls.fastly.net/i/u/300x300/4128a6eb29f94943c9d206c08e625904.jpg"
        }
      ];

  return (
    <div className="track-list">
      <div className="track-list__items">
        {tracks.map((track, index) => (
          <TrackItem
            key={index}
            title={track.title}
            artist={track.artist}
            tags={track.tags}
            image_url={track.image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default TrackList;