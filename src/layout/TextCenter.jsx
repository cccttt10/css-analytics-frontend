import styled from '@emotion/styled';
import { color, fontSize, space, width } from 'styled-system';

const TextCenter = styled('div')(
    [],
    props => ({
        textAlign: 'center',
    }),
    space,
    fontSize,
    width,
    color
);

TextCenter.defaultProps = {};

export default TextCenter;
