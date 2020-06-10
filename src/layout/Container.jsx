import styled from '@emotion/styled';
import { color, fontSize, space, width } from 'styled-system';

import Font from './Font';

const Container = styled(Font)(
    [],
    props => ({
        maxWidth: '96rem',
        marginLeft: 'auto',
        marginRight: 'auto',
    }),
    space,
    fontSize,
    width,
    color
);

Container.defaultProps = {
    px: 1,
};

export default Container;
