import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  isDisabled: boolean;
}

export function Button(props: Props): React.ReactElement {
  const { children, isDisabled, onClick } = props;

  function handleOnClick() {
    if (isDisabled) {
      return;
    }
    onClick();
  }

  return (
    <button
      onClick={handleOnClick}
      className={`
                w-fit rounded-lg py-3 px-10 
                ${!isDisabled && "cursor-pointer shadow-md hover:scale-105"} 
                ${isDisabled ? "bg-gray-800" : "bg-green-700"} 
            `}
    >
      {children}
    </button>
  );
}
