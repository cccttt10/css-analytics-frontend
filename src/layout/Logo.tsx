import React from 'react';
import { FileText } from 'react-feather';

interface LogoProps {
    size: number;
    color?: string;
}

const Logo: React.FC<LogoProps> = ({ size, color }) => (
    <FileText size={size} color={color || 'currentcolor'} />
);

export default Logo;
