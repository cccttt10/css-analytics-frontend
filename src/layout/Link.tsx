/** @jsx jsx */
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { jsx, Styled } from 'theme-ui';

interface LinkProps {
    href: string;
}
const Link: React.FC<LinkProps> = ({ href, ...props }: LinkProps) => (
    <Styled.a as={GatsbyLink} href={href} {...props} />
);

export default Link;
