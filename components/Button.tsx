import { ReactNode } from 'react';

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="flex gap-1 justify-center items-center rounded-md bg-primary p-4 text-white w-[180px]">
      {children}
    </button>
  );
};

export default Button;
