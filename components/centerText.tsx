import { ReactNode } from 'react';

interface Props {
  children: ReactNode
  className?: string
}

const CenterText = ({ children, className }: Props) => {
  return (
    <div className={
      className === undefined
        ? "h-full flex flex-col justify-center"
        : `${className} h-full flex flex-col justify-center`
    }>
      {children}
    </div>
  );
};

export default CenterText;
