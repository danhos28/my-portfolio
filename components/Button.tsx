import { ReactNode } from 'react';

const Button = ({
  children,
  onClick,
  style,
}: {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: string;
}) => {
  return (
    <button
      className={`flex flex-grow gap-1 max-w-[180px] ${style} justify-center items-center rounded-md bg-primary p-4  text-white outline-none btn-inset`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
