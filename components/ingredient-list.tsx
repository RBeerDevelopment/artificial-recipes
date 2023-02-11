import React, { useEffect } from "react";
import { IngredientInput } from "./ingredient-input";

interface Props {
    ingredients: string[];
    setIngredients: (ingredients: string[]) => void;
}

export function IngredientList(props: Props): React.ReactElement {

    const { ingredients, setIngredients } = props;
    let currentlyFocused = React.useRef<number>(0);

    useEffect(() => {
        if(ingredients.at(-1) !== "") {
            addNewIngredient();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ingredients])

    function onChangeInput(index: number, newValue: string) {
        if(index >= ingredients.length) {
            return;
        }
        const newIngredients = [...ingredients];
        newIngredients[index] = newValue;
        setIngredients(newIngredients);
    }

    function addNewIngredient() {
        const newIngredients = [...ingredients, ""];
        setIngredients(newIngredients);
    }

    function removeIngredientAtIndex(index: number) {
        const newIngredients = [...ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
    }

    function handleOnFocus(index: number) {
        currentlyFocused.current = index;
    }

    

    return (
        <div className="space-y-4 flex flex-col items-center gap-1">
            {ingredients.map((ingredient, index) => (
                <IngredientInput 
                    key={index + ingredient}
                    ingredient={ingredient} 
                    isFocused={index === currentlyFocused.current} 
                    onDelete={() => removeIngredientAtIndex(index)}
                    onFocus={() => handleOnFocus(index)}
                    onChange={(newValue) => onChangeInput(index, newValue)}
                    showDelete={ingredients.length !== 1} 
                />
            ))}
        </div>
    );
}