"use client";

interface IProps {
  onClick: () => void;
  children: React.ReactNode;
  isHighlighted?: boolean;
}

export const Button: React.FC<IProps> = ({ onClick, children, isHighlighted }) => {
  return (
    <button
      onClick={onClick}
      className={`
      ransition-main rounded-xl  h-formElement-m px-big text-sm hover:shadow-light
      ${isHighlighted ? 'main-gradient text-white hover:bg-paletteDark hover:bg-paletteRegular' :
        'border text-palettePrimary border-greyRegularDarken bg-white hover:bg-greyDark'}
      `}
    >
      {children}
    </button>
  );
}