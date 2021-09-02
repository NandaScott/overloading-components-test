// From: https://www.fullstacklabs.co/blog/overload-typescript-react-component-interfaces-prop-values

import React from 'react';

// export interface ElementAlt1Props { b?: 'string'; c?: string; }
// ‍export interface ElementAlt2Props { b?: 'number'; c?: number; }
export interface ElementAlt1Props {
  b?: 'string';
  c?: string;
}
export interface ElementAlt2Props {
  b?: 'number';
  c?: number;
}
export type ElementProps = ElementAlt1Props | ElementAlt2Props;

export type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

export type VoidElement =
  | 'area'
  | 'base'
  | 'br'
  | 'col'
  | 'hr'
  | 'img'
  | 'input'
  | 'link'
  | 'meta'
  | 'param'
  | 'command'
  | 'keygen'
  | 'source';

export type OmitChildrenFromVoid<C extends React.ElementType> =
  C extends VoidElement
    ? Omit<React.ComponentPropsWithRef<C>, 'children'>
    : React.ComponentPropsWithRef<C>;

export interface OverloadedElement<P> {
  <C extends React.ElementType>(
    props: { as: C } & P & Omit<OmitChildrenFromVoid<C>, keyof P>
  ): JSX.Element;
  (props: P & Omit<React.ComponentPropsWithRef<'div'>, keyof P>): JSX.Element;
}

export const Element: OverloadedElement<ElementProps> = ({
  as: Component = 'div',
  ...props
}) => <Component {...props} />;
