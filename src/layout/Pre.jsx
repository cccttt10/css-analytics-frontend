import styled from '@emotion/styled';
import { borderRadius, color, fontSize, space, width } from 'styled-system';

const Pre = styled('pre')(
    [],
    props => ({
        maxHeight: '50vh',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
    }),
    space,
    fontSize,
    width,
    color,
    borderRadius
);

Pre.defaultProps = {
    bg: 'lightGray',
    p: 3,
    borderRadius: 4,
};

export default Pre;
