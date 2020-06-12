import { Declarations } from 'global';
import { intComma } from 'humanize-plus';
import uniq from 'lodash.uniq';
import React from 'react';

import { BarGraph, Div, SectionTitle } from '../../layout/';

interface DeclarationsChartProps {
    data: Declarations;
}

const DeclarationsChart: React.FC<DeclarationsChartProps> = ({ data }) => {
    const total = intComma(data.total);
    const unique = intComma(data.unique);

    const properties = [
        'width',
        'height',
        'margin',
        'padding',
        'background-color',
        'color',
    ];

    const formattedData = [
        properties.map(p => ({ x: p, y: (data.properties[p] || []).length })),
        properties.map(p => ({
            x: p,
            y: uniq(data.properties[p] || []).length,
        })),
    ];

    return (
        <Div mt={4}>
            <SectionTitle
                title="Total vs Unique Declarations"
                description={`${total} total, ${unique} unique`}
            />

            <BarGraph data={formattedData} />
        </Div>
    );
};

export default DeclarationsChart;
