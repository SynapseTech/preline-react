import styles from './styles.module.scss';
import React, { ComponentPropsWithoutRef, ComponentPropsWithRef, ReactNode, forwardRef, ElementType } from 'react';
import classNames from 'classnames';
import { DarkProps } from '../../lib/commonProps';

export const buttonColors = {
    'blue': undefined
};

export type ButtonColor = keyof typeof buttonColors;

export type ButtonProps<C extends ElementType> = {
    as?: C;
    outline?: boolean;
    color?: ButtonColor;
    ghost?: boolean;
    pilled?: boolean;
    block?: boolean;
    soft?: boolean;
    children: ReactNode;
} & DarkProps & ComponentPropsWithoutRef<C>;

type ButtonRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];

export const PrelineButton = forwardRef(<C extends ElementType = "button",>({
    color = "blue",
    ghost = false,
    outline = false,
    pilled = false,
    block = false,
    soft = false,
    children,
    as,
    ...rest
}: ButtonProps<C>, ref: ButtonRef<C>) => {
    const Component = as || "button";

    const classes = classNames(styles.button, {
        [styles[color]]: true,
        [styles.outline]: outline,
        [styles.ghost]: ghost,
        [styles.pilled]: pilled,
        [styles.block]: block,
        [styles.soft]: soft,
    });

    return <Component ref={ref} className={classes} {...rest}>{children}</Component>;
});
