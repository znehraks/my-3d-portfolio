import { minimapWrapperStyle, playerPointStyle } from './Minimap.css';

export function Minimap() {
  return (
    <div className={minimapWrapperStyle}>
      <div className={playerPointStyle} />
    </div>
  );
}
