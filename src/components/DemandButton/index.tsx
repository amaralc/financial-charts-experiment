import { ReactNode } from 'react';

interface DemandButtonProps {
  children: ReactNode;
}

export const DemandButton = (props: DemandButtonProps) => {
  return <button {...props}></button>;
};
