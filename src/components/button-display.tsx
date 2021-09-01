import { useState } from 'react';
import './component.css';

export interface ButtonDisplayProps {
  initialClicks?: number;
  text?: string;
}

export default function ButtonDisplay(props: ButtonDisplayProps) {
  const { initialClicks, text } = props;
  const [clicks, setClicks] = useState(initialClicks ?? 0);
  const handleText = text ?? 'I have been clicked';
  return (
    <div className='buttonDisplayContainer green'>
      <p className='buttonDisplayText'>{`${handleText}: ${clicks} ${
        clicks === 1 ? 'time' : 'times'
      }`}</p>
      <button onClick={() => setClicks(clicks + 1)}>Click Me</button>
    </div>
  );
}
