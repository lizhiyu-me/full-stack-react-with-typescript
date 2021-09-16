import React from "react";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "./style";

type PropsWithChildren<P> = P & { children: React.ReactNode };
interface ColumnProps {
    text: string;
}

export const Column = ({ text, children }: PropsWithChildren<ColumnProps>) => {
    return (
        <ColumnContainer>
            <ColumnTitle>
                {text}
            </ColumnTitle>
            {children}
            <AddNewItem toggleButtonText="+ Add another task" onAdd={console.log} dark/>
        </ColumnContainer>
    )
}
