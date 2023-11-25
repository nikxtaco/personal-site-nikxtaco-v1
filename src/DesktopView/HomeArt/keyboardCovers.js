import React from 'react';
import "./art.css"

const KeyboardCovers = ({ videos }) => {
  return (
    <div className="iframe-container">
      {Object.entries(videos).map(([title, url]) => (
        <div key={title} className="iframe-item">
          <iframe
            width="100%"
            height="100"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={url + "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"}
          ></iframe>

          <div
            style={{
              position: 'relative',
              top: '-15px',
              lineHeight: '15px',
              backgroundColor: 'black',
              maxWidth: '100%',
              fontSize: '10px',
              color: '#cccccc',
              lineBreak: 'anywhere',
              wordBreak: 'normal',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              fontFamily:
                'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
              fontWeight: 100,
            }}
          >
            <a href={url + "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"} style={{ color: '#cccccc', textDecoration: 'none' }}>
              {title}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KeyboardCovers;