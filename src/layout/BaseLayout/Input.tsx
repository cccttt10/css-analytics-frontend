/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;
const Input: React.FC<InputProps> = ({ ...props }) => (
    <input
        sx={{
            fontSize: 2,
            display: 'block',
            width: '100%',
            py: 3,
            px: 24,
            overflow: 'visible',
            bg: 'background',
            borderStyle: 'solid',
            borderRadius: 4,
            borderWidth: 1,
            borderColor: 'lightGray',
            boxShadow: `
          0 2px 3px -1px rgba(0, 0, 0, .16),
          0 1px 2px -1px rgba(0, 0, 0, .08)
        `,
        }}
        {...props}
    />
);

export default Input;
