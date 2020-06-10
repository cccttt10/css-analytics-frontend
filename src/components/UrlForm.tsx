/** @jsx jsx */
import { navigate } from 'gatsby';
import React, { useState } from 'react';
import { jsx } from 'theme-ui';

import Input from '../layout/Input';
import Label from '../layout/Label';

interface UrlFormsProps {
    showLabel: boolean;
}

const UrlForm: React.FC<UrlFormsProps> = ({ showLabel = false }) => {
    const [url, setUrl] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        navigate(`/stats?url=${encodeURIComponent(url)}`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
        setUrl(e.target.value);

    return (
        <form onSubmit={handleSubmit}>
            <Label sx={{ mb: 2, display: showLabel ? 'block' : 'none' }}>
                Input a URL
            </Label>
            <Input
                placeholder="google.com"
                inputMode="url"
                value={url}
                onChange={handleChange}
                sx={{ color: 'text' }}
            />
        </form>
    );
};

export default UrlForm;
