import clsx from 'clsx';

import style from './Button.module.css';
const Index = ({ primary, danger }) => {
  return (
    <div>
      <button
        className={clsx(style.btn, {
          [style.primary]: primary,
          [style.danger]: danger,
        })}
      >
        {(danger && 'Danger') || (primary && 'Primary') || 'Clickme'}
      </button>
    </div>
  );
};

export default Index;
