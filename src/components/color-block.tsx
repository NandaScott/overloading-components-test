import './component.css';

export interface ColorBlockProps {
  text: string;
  color?: 'red' | 'blue' | 'yellow';
}

export default function ColorBlock(props: ColorBlockProps) {
  const { color, text } = props;
  return (
    <div className={`coloredBlock ${color ?? 'red'}`}>
      <p className='text'>{text ?? 'My Text'}</p>
    </div>
  );
}
