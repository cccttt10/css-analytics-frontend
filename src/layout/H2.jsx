import styled from '@emotion/styled';
import { color, fontSize, space, width } from 'styled-system';

const H2 = styled('h2')([], props => ({}), space, fontSize, width, color);

H2.defaultProps = {
    color: 'inherit',
};

export default H2;
