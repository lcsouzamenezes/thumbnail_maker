import { ReactNode } from 'react';
import styled from 'styled-components';
import { ColorPalette } from '@src/types';
import { colorPaletteValue } from '@src/assets/colorPalette';

type ButtonProps = {
  children: ReactNode;
  variant: ColorPalette;
  onClick: () => void;
  type?: 'submit' | 'button' | 'reset';
};
export default function Button({ children, ...props }: ButtonProps) {
  return <StyleBtn {...props}>{children}</StyleBtn>;
}

type StyledBtnProps = {
  readonly variant: ColorPalette;
};

const hoverBackgroundColor = {
  red: '#ef4444',
  yellow: '#facc15',
  blue: '#2563eb',
  pink: '#ec4899',
  gray: '#4b5563',
  primary: '#8b5cf6',
  dark: '#6d28d9',
  light: '#c4b5fd',
  black: '#000000',
  white: '#f4f4f5',
};

const StyleBtn = styled.button<StyledBtnProps>`
  padding: 8px 12px;
  margin: 6px 12px 6px 0;
  border-radius: 4px;
  font-size: 1rem;
  text-transform: uppercase;
  border: ${(props) => (props.variant === 'white' ? 'solid' : 'none')};
  color: ${(props) => (props.variant === 'white' ? 'black' : 'white')};
  background-color: ${(props) => colorPaletteValue[props.variant]};
  &:hover {
    cursor: pointer;
    color: ${(props) => (props.variant === 'white' ? 'black' : 'white')};
    background-color: ${(props) => hoverBackgroundColor[props.variant]};
  }
`;
