export const PagePill = ({
  disabled = false,
  selected = false,
  onClick,
  children,
}) => {
  return (
    <li
      onClick={onClick}
      className={`
          ${
            selected
              ? 'bg-white text-purple-500 border-gray-300'
              : !disabled &&
                'bg-purple-300 text-white cursor-pointer border-purple-500'
          } 
      ${
        disabled &&
        'bg-gray-300 text-gray-500 border-gray-500 pointer-events-none'
      }
    p-1 h-8 min-w-[2rem] text-center my-auto mx-1 border-2 rounded-full flex items-center justify-center`}
    >
      {children}
    </li>
  );
};
