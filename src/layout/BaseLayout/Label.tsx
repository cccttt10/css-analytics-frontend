/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

interface LabelProps {
    display?: string;
}

const Label: React.FC<LabelProps> = ({ display = 'block', ...props }) => (
    <label
        sx={{
            display,
            color: 'text',
            fontSize: 2,
            fontWeight: 'bold',
        }}
        {...props}
    />
);

export default Label;
