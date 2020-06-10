import styled from '@emotion/styled';
import { color, fontSize, space, width } from 'styled-system';

const Font = styled('div')(
    [],
    props => ({
        fontFamily: `${props.mono ? 'monospace' : props.fontFamily}`,
    }),
    space,
    fontSize,
    width,
    color
);

Font.defaultProps = {
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif',
    color: 'black',
};

export default Font;
