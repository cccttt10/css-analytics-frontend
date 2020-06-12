/** @jsx jsx */
import axios from 'axios';
import CSS from 'csstype';
import getQueryParam from 'get-query-param';
import { Graph, Response } from 'global';
import isUrl from 'is-url';
import { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';
import { Styled } from 'theme-ui';

import {
    BackgroundColors,
    Colors,
    Declarations,
    DeclarationsChartLayout,
    DeclarationsChartMargin,
    DeclarationsChartPadding,
    DeclarationsChartTypography,
    FontFamilies,
    FontSizes,
    RulesetGraph,
    Selectors,
    SpacingResets,
    SpecificityGraph,
    Summary,
    ZIndices,
} from '../components/analytics/';
import { Div, Flex, H2, Loading, Pre, SubHeader } from '../layout/';
import Layout from '../layout/BaseLayout';

const API_URL = process.env.API_URL;

const AnalyticsPage: React.FC = () => {
    const [response, setResponse] = useState<Response | null>(null);
    const [url, setUrl] = useState<string>('');

    useEffect(() => {
        const linkFromQuery = getQueryParam('link', window.location.href);
        const urlFromQuery = getQueryParam('url', window.location.href);
        setUrl(linkFromQuery || urlFromQuery);
    }, []);

    useEffect(() => {
        const fetchAnalytics = async () => {
            if (!url) {
                return;
            }
            const response = await axios.get(
                `${API_URL}/getCssAnalytics?url=${url}`
            );
            setResponse(response.data);
        };
        fetchAnalytics();
    }, [url]);

    if (!response) {
        return (
            <Layout sx={{ p: [4, 5, 6] }} initialUrl={url}>
                <Flex alignItems="center">
                    <Loading />
                    <H2 sx={{ my: 0, pl: 3 }}>
                        Downloading and analyzing CSS from{' '}
                        <Styled.a href={isUrl(url) ? url : '//' + url}>
                            {url}
                        </Styled.a>
                    </H2>
                </Flex>
            </Layout>
        );
    }

    const {
        css: { css, pageTitle },
        analytics: {
            rules,
            humanizedGzipSize,
            humanizedSize,
            declarations,
            selectors,
        },
    } = response;
    const properties = declarations.properties;
    const backgroundColors = properties['background-color'] || [];
    const colors = properties.color || [];

    return (
        <Layout initialUrl={url} onUrlChange={url => setUrl(url)}>
            <SubHeader title={url} description={pageTitle} sx={{ mb: 5 }} />
            <Flex>
                <div
                    sx={{
                        bg: 'lightGray',
                        color: 'darkGray',
                        borderRadius: '7px',
                        p: 4,
                    }}
                >
                    <Flex>
                        <dl
                            sx={{
                                marginRight: 32,
                                paddingRight: 32,
                                borderRight: '1px solid',
                                borderColor: 'gray',
                            }}
                        >
                            <dt>File size</dt>
                            <dd
                                sx={{ fontSize: 64, fontWeight: 700, marginLeft: 0 }}
                            >
                                {humanizedSize}
                            </dd>
                        </dl>
                        <dl sx={{ marginRight: 32, paddingRight: 32 }}>
                            <dt>Gzipped file size</dt>
                            <dd
                                style={{
                                    fontSize: 64,
                                    fontWeight: 700,
                                    marginLeft: 0,
                                }}
                            >
                                {humanizedGzipSize}
                            </dd>
                        </dl>
                    </Flex>
                </div>
                <div sx={{ width: '100%' }}>
                    <div sx={{ pl: 4, width: '100%' }}>
                        <table sx={{ fontSize: 1, width: '100%' }} cellSpacing="0">
                            <tr>
                                <th
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        fontSize: 0,
                                        textAlign: 'left',
                                    }}
                                />
                                <th
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        fontSize: 0,
                                        textAlign: 'right',
                                    }}
                                >
                                    Size
                                </th>
                                <th
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        fontSize: 0,
                                        textAlign: 'right',
                                    }}
                                >
                                    Gzipped
                                </th>
                            </tr>
                            <tr>
                                <td
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        py: 1,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Basscss
                                </td>
                                <td
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        textAlign: 'right',
                                    }}
                                >
                                    10kb
                                </td>
                                <td
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        textAlign: 'right',
                                    }}
                                >
                                    2kb
                                </td>
                            </tr>
                            <tr>
                                <td
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        py: 1,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Tachyons
                                </td>
                                <td
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        textAlign: 'right',
                                    }}
                                >
                                    72kb
                                </td>
                                <td
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        textAlign: 'right',
                                    }}
                                >
                                    13kb
                                </td>
                            </tr>
                            <tr>
                                <td
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        py: 1,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Foundation
                                </td>
                                <td
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        textAlign: 'right',
                                    }}
                                >
                                    119kb
                                </td>
                                <td
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        textAlign: 'right',
                                    }}
                                >
                                    16kb
                                </td>
                            </tr>
                            <tr>
                                <td
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        py: 1,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Primer
                                </td>
                                <td
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        textAlign: 'right',
                                    }}
                                >
                                    140kb
                                </td>
                                <td
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        textAlign: 'right',
                                    }}
                                >
                                    22kb
                                </td>
                            </tr>
                            <tr>
                                <td
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        py: 1,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Bootstrap
                                </td>
                                <td
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        textAlign: 'right',
                                    }}
                                >
                                    123kb
                                </td>
                                <td
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        textAlign: 'right',
                                    }}
                                >
                                    23kb
                                </td>
                            </tr>
                            <tr>
                                <td
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        py: 1,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Bulma
                                </td>
                                <td
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        textAlign: 'right',
                                    }}
                                >
                                    186kb
                                </td>
                                <td
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'gray',
                                        textAlign: 'right',
                                    }}
                                >
                                    24kb
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </Flex>

            <div
                sx={{
                    mt: 4,
                    p: 4,
                    borderRadius: '7px',
                    bg: 'darkGray',
                    color: 'lightGray',
                }}
            >
                <Summary
                    rules={rules.total}
                    selectors={selectors.total}
                    declarations={declarations.total}
                    properties={Object.keys(properties).length}
                />
                <Selectors
                    classes={selectors.class}
                    id={selectors.id}
                    pseudoClass={selectors.pseudoClass}
                    pseudoElement={selectors.pseudoElement}
                />
            </div>
            <Declarations properties={properties} />
            <Colors colors={colors} />
            <BackgroundColors backgroundColors={backgroundColors} />
            <H2 id="typography" sx={{ fontSize: 6 }}>
                Typography
            </H2>
            <FontSizes fontSizes={properties['font-size']} />
            <FontFamilies fontFamilies={properties['font-family']} />
            <SpacingResets properties={properties} />
            <ZIndices zIndices={properties['z-index'] as CSS.ZIndexProperty[]} />
            <SpecificityGraph
                max={selectors.specificity.max}
                average={Math.round(selectors.specificity.average)}
                data={selectors.specificity.graph as Graph}
            />
            <RulesetGraph data={rules.size.graph as Graph} />
            <DeclarationsChartLayout data={declarations} />
            <DeclarationsChartTypography data={declarations} />
            <DeclarationsChartPadding data={declarations} />
            <DeclarationsChartMargin data={declarations} />
            <Div sx={{ mt: 5 }}>
                <H2>Raw Css</H2>
                <Pre>{css.trim()}</Pre>
            </Div>
        </Layout>
    );
};

export default AnalyticsPage;
