import styled from '@emotion/styled';
import { color, space, typography, width } from 'styled-system';

const Dt = styled('dt')([], props => ({}), space, typography, width, color);

Dt.defaultProps = {
    fontWeight: 'bold',
};

export default Dt;
