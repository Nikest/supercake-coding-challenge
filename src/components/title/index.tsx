interface IProps {
  children: React.ReactNode;
}

export const Title: React.FC<IProps> = ({ children }) => {
  return (
    <h1 className="text-2xl font-semibold tracking-[-3%] text-palettePrimary">{children}</h1>
  );
}