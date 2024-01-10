import './index.css';

export { default as Icon } from './components/Icon';

export const Button = () => {
  const onClick = () => {
    console.log('onClick', new Date().getTime());
  };
  return (
    <button
      onClick={onClick}
      className="!text-red-600 text-large text-3xl font-bold underline"
    >
      onClick Button component
    </button>
  );
};
