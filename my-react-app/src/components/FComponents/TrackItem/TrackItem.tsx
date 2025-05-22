import React from "react";
import "./trackItem.css";

const TrackItem = (props: { title: string, artist: string, tags: string[], image_url: string | undefined}) => {
  return (
    <div className="track-container">
      <div className="track-item-image" style={{backgroundImage: `url(${props.image_url})`}}></div>
      <div className="track-item">
        <h3 className="track-item__title">{props.title}</h3>
        {props.artist && <div className="track-item__artist">{props.artist}</div>}
        {props.tags?.length > 0 && (
          <div className="track-item__tags">
            {props.tags.map((tag, index) => (
              <span key={index} className="track-item__tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackItem;