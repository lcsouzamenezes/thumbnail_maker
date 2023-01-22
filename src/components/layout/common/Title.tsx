import { ReactNode } from 'react';
import styled from 'styled-components';

type TitleProps = { children: ReactNode; variant: 'title' | 'subTitle' };

export default function Title({ children, ...props }: TitleProps) {
  return <StyledTitle {...props}>{children}</StyledTitle>;
}

type StyledTitleProps = {
  variant: 'title' | 'subTitle';
};
const StyledTitle = styled.div<StyledTitleProps>`
  margin: 12px;
  font-size: ${(props) => (props.variant === 'title' ? '36px' : '18px')};
`;
