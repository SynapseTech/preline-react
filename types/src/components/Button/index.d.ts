import React, { ComponentPropsWithoutRef, ReactNode, ElementType } from 'react';
import { DarkProps } from '../../lib/commonProps';
export declare const buttonColors: {
    blue: undefined;
};
export declare type ButtonColor = keyof typeof buttonColors;
export declare type ButtonProps<C extends ElementType> = {
    as?: C;
    outline?: boolean;
    color?: ButtonColor;
    ghost?: boolean;
    pilled?: boolean;
    block?: boolean;
    soft?: boolean;
    children: ReactNode;
} & DarkProps & ComponentPropsWithoutRef<C>;
export declare const PrelineButton: React.ForwardRefExoticComponent<Pick<ButtonProps<React.ElementType<any>>, string | number | symbol> & React.RefAttributes<unknown>>;
