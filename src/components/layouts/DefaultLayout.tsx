import { css } from '@emotion/react';
import { ForwardCssType } from '_types/client';

export const DefaultLayout = ({ children, forwardCss }: ChildrenType & ForwardCssType) => {
  return <div css={[Container, forwardCss]}>{children}</div>;
};

const Container = css`
  width: 100vw;
  min-height: 100vh;
  background-color: aliceblue;
`;
