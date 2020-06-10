import styled from '@emotion/styled';
import { color, fontSize, space, width } from 'styled-system';

const Svg = styled('svg')([], props => ({}), space, fontSize, width, color);

Svg.defaultProps = {
    fill: 'currentcolor',
    viewBox: '0 0 32 32',
    height: 32,
    width: 32,
};

export default Svg;
