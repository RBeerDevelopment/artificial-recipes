import React from "react";
import { DeleteIcon } from "./delete-icon";

interface Props {
    ingredient: string
    isFocused: boolean
    onDelete: () => void
    onFocus: () => void
    onChange: (newValue: string) => void
    showDelete: boolean
}

export function IngredientInput(props: Props): React.ReactElement {

    const { ingredient, isFocused, onFocus, onDelete, onChange, showDelete } = props;

    return (
        <div className="flex flex-row justify-center items-center gap-x-4">
            <input  
                type="text"
                className="form-input rounded py-2 px-4 bg-gray-800 focus:border-0 focus:ring-4 focus:ring-green-700"
                value={ingredient} 
                onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)
                } 
                onFocus={onFocus}
                autoFocus={isFocused}
                placeholder="Add ingredient..."
            />

            {showDelete && <DeleteIcon onClick={onDelete}/>}
        </div>
    );
}