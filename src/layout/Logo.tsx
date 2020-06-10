import React from 'react';

interface LogoProps {
    size: number;
    color?: string;
}

const Logo: React.FC<LogoProps> = ({ size, color }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill={color || 'currentcolor'}
    >
        <g fontFamily="inherit" fontSize="12px" fontWeight="bold">
            <text x="0.5" y="11" children="{" />
            <text x="15.5" y="11" textAnchor="end" children="}" />
        </g>

        <rect x="5" y="7" width="2.5" height="4" />
        <rect x="8.5" y="5" width="2.5" height="6" />
    </svg>
);

export default Logo;
