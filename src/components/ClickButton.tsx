import React from 'react';

interface ClickButtonProps {
  text: string;
  onClick: () => void;
}

const ClickButton: React.FC<ClickButtonProps> = ({ text, onClick }) => {
  return (
    <button className="click-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default ClickButton;
