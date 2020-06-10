import styled from '@emotion/styled';
import {
    borderColor,
    color,
    fontSize,
    fontWeight,
    space,
    width,
} from 'styled-system';

const Link = styled('a')(
    [],
    props => ({
        display: `${props.display}`,
        fontWeight: `${props.fontWeight}`,
        textDecoration: 'none',
    }),
    space,
    fontSize,
    width,
    color,
    fontWeight,
    borderColor
);

Link.defaultProps = {
    color: 'blue',
    display: 'inline',
    fontWeight: 'normal',
    href: '#!',
    borderColor: 'transparent',
};

export default Link;
