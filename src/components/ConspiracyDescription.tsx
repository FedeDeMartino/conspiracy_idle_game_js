import React, { useState, useEffect } from 'react';

interface ConspiracyDescriptionProps {
  conspiracyName: string | null | undefined;
  conspiracyText: string | null | undefined;
}

const ConspiracyDescription: React.FC<ConspiracyDescriptionProps> = ({ conspiracyText, conspiracyName }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    setPopupMessage(conspiracyText ?? null)
  }, [isPopupOpen, conspiracyText]);

  return (
    <div>
      <button onClick={togglePopup}>
        {`Learn more about ${conspiracyName}`}
      </button>

      {isPopupOpen && (
        <div style={popupStyle}>
          <div style={popupContentStyle}>
            <span>{popupMessage ?? 'Loading...'}</span>
            <button onClick={togglePopup} style={closeButtonStyle}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const popupStyle: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  border: '1px solid #ccc',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
};

const popupContentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const closeButtonStyle: React.CSSProperties = {
  marginTop: '10px',
};

export default ConspiracyDescription;
