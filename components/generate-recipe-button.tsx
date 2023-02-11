import React from "react";
import { Button } from "./button";
import { LoadingIndicator } from "./loading-indicator";

interface Props {
    isDisabled: boolean
    isLoading: boolean
    onClick: () => void
}

export function GenerateRecipeButton(props: Props): React.ReactElement {

    const { isDisabled, isLoading, onClick } = props;

    return (
        <Button isDisabled={isDisabled} onClick={onClick}>
           {isLoading ? <LoadingIndicator /> : "Generate Recipes"}
        </ Button>
    );
}