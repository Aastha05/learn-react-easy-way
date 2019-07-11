/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const headerStyles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'row'
    }
}

export default function Header() {
//   return <div css={getHeaderWrapperCSS()}>Hey It's header</div>;
return (
    <div css={getHeaderWrapperCSS()}>
        <div className="brand-name">
            <span>
                __learning(.)int
            </span>
        </div>
        <div className="navigation">
            <ul>
                <li>
                    <a>Menu 1</a>
                </li>
                <li>
                    <a>Menu 2</a>
                </li>
                <li>
                    <a>Menu 3</a>
                </li>
                <li>
                    <a>Menu 4</a>
                </li>
            </ul>
        </div>
    </div>
)
}

function getHeaderWrapperCSS() {
  return {
    display: 'flex',
    flexDirection: 'row',
    // background: '#008080'
  };
}
