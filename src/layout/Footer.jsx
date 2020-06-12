import React from 'react';

import Div from './Div';
import Flex from './Flex';
import Hr from './Hr';
import Link from './Link';

const Footer = props => (
    <Div>
        <Hr />
        <Flex py={3} alignItems="center" justify="space-between">
            <Div>
                Made by
                <Link
                    href="https://compositor.io"
                    ml={1}
                    fontWeight="bold"
                    color="black"
                    children="compositor.io"
                />
            </Div>
            <Div>
                <Link
                    fontWeight="bold"
                    color="black"
                    href="https://github.com/chuntonggao/css-analytics-frontend"
                    children="Front End"
                />
                <Link
                    ml={2}
                    fontWeight="bold"
                    color="black"
                    href="https://github.com/chuntonggao/css-analytics-backend"
                    children="Back End"
                />
            </Div>
        </Flex>
    </Div>
);

export default Footer;
