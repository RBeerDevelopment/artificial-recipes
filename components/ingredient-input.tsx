import React from "react";
import { DeleteIcon } from "./delete-icon";

interface Props {
  ingredient: string;
  isFocused: boolean;
  onDelete: () => void;
  onFocus: () => void;
  onChange: (newValue: string) => void;
  showDelete: boolean;
}

export function IngredientInput(props: Props): React.ReactElement {
  const { ingredient, isFocused, onFocus, onDelete, onChange, showDelete } =
    props;

  return (
    <div className="flex flex-row items-center justify-center gap-x-4">
      <input
        type="text"
        className="form-input rounded bg-gray-800 py-2 px-4 focus:border-0 focus:ring-4 focus:ring-green-700"
        value={ingredient}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        onFocus={onFocus}
        autoFocus={isFocused}
      />

      {showDelete && <DeleteIcon onClick={onDelete} />}
    </div>
  );
}
