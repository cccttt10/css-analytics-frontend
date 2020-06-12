import { Declarations } from 'global';
import uniq from 'lodash.uniq';
import React from 'react';

import { BarChart, Div, SectionTitle } from '../../layout';

interface DeclarationsChartTypographyProps {
    data: Declarations;
}

const DeclarationsChartTypography: React.FC<DeclarationsChartTypographyProps> = ({
    data,
}) => {
    const properties = [
        'font-family',
        'font-size',
        'font-weight',
        'line-height',
        'text-align',
        'text-decoration',
        'letter-spacing',
    ];

    const formattedData = [
        properties.map(p => ({ x: p, y: (data.properties[p] || []).length })),
        properties.map(p => ({
            x: p,
            y: uniq(data.properties[p] || []).length,
        })),
    ];

    return (
        <Div sx={{ mt: 4 }}>
            <SectionTitle title="Typography" />
            <BarChart data={formattedData} />
        </Div>
    );
};

export default DeclarationsChartTypography;
