/** @jsx jsx */
import { useState } from 'react';
import { GitHub, Moon } from 'react-feather';
import { Helmet } from 'react-helmet';
import { Container, Header, jsx, Styled, useColorMode } from 'theme-ui';

import Input from './Input';
import Label from './Label';
import Link from './Link';
import Logo from './Logo';

interface BaseLayoutProps {
    title?: string;
    initialUrl: string;
    onUrlChange?: (url: string) => void;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
    title,
    initialUrl,
    onUrlChange,
    children,
}) => {
    const [url, setUrl] = useState(initialUrl);
    const [colorMode, setColorMode] = useColorMode();
    return (
        <div>
            <style>{`* { box-sizing: border-box; }`}</style>
            <Helmet
                title={'CSS Analytics'}
                meta={[
                    {
                        name: 'CSS Analytics',
                        content: 'CSS Analytics',
                    },
                ]}
            />
            <Styled.root>
                <Header>
                    <div
                        sx={{
                            display: 'flex',
                            width: '100%',
                            maxWidth: '100%',
                            alignItems: 'center',
                            flexWrap: 'nowrap',
                        }}
                    >
                        <Link href="/" sx={{ ml: 2, color: 'text' }}>
                            <span
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                    alignItems: 'center',
                                }}
                            >
                                <Logo size={32} />
                                <span
                                    sx={{
                                        ml: 2,
                                        fontSize: 0,
                                        display: ['none', 'block'],
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    CSS Analytics
                                </span>
                            </span>
                        </Link>

                        {initialUrl ? (
                            <div sx={{ px: 3, width: ['100%'] }}>
                                <form
                                    onSubmit={(e): void => {
                                        e.preventDefault();
                                        if (onUrlChange) {
                                            onUrlChange(url);
                                        }
                                    }}
                                >
                                    <Label display="none">Url</Label>
                                    <Input
                                        placeholder="Url to extract CSS analytics"
                                        inputMode="url"
                                        value={url}
                                        onChange={(e): void =>
                                            setUrl(e.target.value)
                                        }
                                        sx={{ color: 'text' }}
                                    />
                                </form>
                            </div>
                        ) : null}

                        <div
                            sx={{
                                ml: 'auto',
                                width: 96,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Styled.a
                                sx={{
                                    mr: 3,
                                    cursor: 'pointer',
                                }}
                                onClick={(): void => {
                                    setColorMode(
                                        colorMode === 'light' ? 'dark' : 'light'
                                    );
                                }}
                                title="Toggle color mode"
                            >
                                <Moon />
                            </Styled.a>
                            <Styled.a href="https://github.com/chuntonggao/css-analytics-frontend">
                                <GitHub />
                            </Styled.a>
                        </div>
                    </div>
                </Header>
                <title children={title || 'CSS Analytics'} />
                <Container sx={{ maxWidth: '72rem' }}>{children}</Container>
            </Styled.root>
        </div>
    );
};

export default BaseLayout;
