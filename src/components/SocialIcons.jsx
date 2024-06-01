import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  const lnk = {
    fontSize: '72px',
    margin: '20px',
    'padding-right': '5vw',
    color: '#0A66C2',
    cursor: 'pointer',
  };

  const github = {
    fontSize: '72px',
    margin: '20px',
    'padding-right': '5vw',
    color: '#FFF',
    cursor: 'pointer',
  };

  const twit = {
    fontSize: '72px',
    margin: '20px',
    'margin-bottom': '40vh',
    'padding-right': '5vw',
    color: '#FFFFFF',
    cursor: 'pointer',
  };

  const handleIconClick = (app) => {
    let url;
    switch (app) {
      case 'linkedin':
        url = 'https://www.linkedin.com/in/vineet-kumar-motwani-4831a7229/';
        break;
      case 'github':
        url = 'https://github.com/vineet-motwani';
        break;
      case 'twitter':
        url = 'https://x.com/UrPalFromBhopal';
        break;
      default:
        console.error('Invalid app name:', app);
    }
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div style={{ position: 'fixed', right: '10px', bottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <FontAwesomeIcon icon={faLinkedin} style={lnk} onClick={() => handleIconClick('linkedin')} />
      <FontAwesomeIcon icon={faGithub} style={github} onClick={() => handleIconClick('github')} />
      <FontAwesomeIcon icon={faXTwitter} style={twit} onClick={() => handleIconClick('twitter')} />
    </div>
  );
};

export default SocialIcons;
