/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function Header() {
  return <div css={getHeaderWrapperCSS()}>Hey It's header</div>;
}

function getHeaderWrapperCSS() {
  return {
    display: 'flex',
    flexDirection: 'row'
  };
}
