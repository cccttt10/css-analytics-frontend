import React from 'react';

import Font from './Font';
import Pre from './Pre';

const CodeBlock = props => (
    <Font mono>
        <Pre children={props.children} />
    </Font>
);

export default CodeBlock;
