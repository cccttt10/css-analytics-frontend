import styled from '@emotion/styled';
import {
    borderRadius,
    borders,
    color,
    space,
    typography,
    width,
} from 'styled-system';

const Div = styled('div')(
    [],
    props => ({}),
    space,
    borders,
    borderRadius,
    typography,
    width,
    color
);

Div.defaultProps = {};

export default Div;
