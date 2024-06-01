import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faSkype, faTelegram } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  const whats = {
    fontSize: '72px',
    margin: '20px',
    'padding-right': '5vw',
    color: '#25D366',
    cursor: 'pointer',
  };

  const tele = {
    fontSize: '72px',
    margin: '20px',
    'padding-right': '5vw',
    color: '#0088CC',
    cursor: 'pointer',
  };

  const skp = {
    fontSize: '72px',
    margin: '20px',
    'margin-bottom': '40vh',
    'padding-right': '5vw',
    color: '#12A8F5',
    cursor: 'pointer',
  };

  const handleIconClick = (app) => {
    let url;
    switch (app) {
      case 'whatsapp':
        url = 'https://wa.me/919773844306';
        break;
      case 'skype':
        url = 'https://join.skype.com/invite/wAub4IlBQYcZ';
        break;
      case 'telegram':
        url = 'https://t.me/acadshield';
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
      <FontAwesomeIcon icon={faWhatsapp} style={whats} onClick={() => handleIconClick('whatsapp')} />
      <FontAwesomeIcon icon={faTelegram} style={tele} onClick={() => handleIconClick('whatsapp')} />
      <FontAwesomeIcon icon={faSkype} style={skp} onClick={() => handleIconClick('whatsapp')} />
    </div>
  );
};

export default SocialIcons;
