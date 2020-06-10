import styled from '@emotion/styled';
import {
    borderColor,
    borderWidth,
    color,
    fontSize,
    space,
    width,
} from 'styled-system';

const Hr = styled('hr')(
    [],
    props => ({}),
    space,
    fontSize,
    width,
    color,
    borderColor,
    borderWidth
);

Hr.defaultProps = {
    borderColor: 'black',
    borderWidth: 1,
};

export default Hr;
