"use client";

interface IProps {
  children: React.ReactNode;
  state?: 'error' | 'default';
}

export const Box: React.FC<IProps> = ({ children, state }) => {
  return <section className={`p-8 bg-greyMain ${state === 'error' ? 'bg-errorLight' : 'bg-greyMain'}`}>{children}</section>;
}