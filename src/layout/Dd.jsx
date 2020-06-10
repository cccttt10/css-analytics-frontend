import styled from '@emotion/styled';
import { color, fontSize, fontWeight, space, width } from 'styled-system';

const Dd = styled('dd')(
    [],
    props => ({
        lineHeight: '1',
    }),
    space,
    fontSize,
    width,
    color,
    fontWeight
);

Dd.defaultProps = {
    ml: 0,
    fontWeight: 'normal',
};

export default Dd;
