import { Declarations } from 'global';
import uniq from 'lodash.uniq';
import React from 'react';

import { BarChart, Div, SectionTitle } from '../../layout';

interface DeclarationsChartSpacingProps {
    data: Declarations;
}

const DeclarationsChartPadding: React.FC<DeclarationsChartSpacingProps> = ({
    data,
}) => {
    const properties = [
        'padding',
        'padding-left',
        'padding-right',
        'padding-top',
        'padding-bottom',
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
            <SectionTitle title="Padding" />
            <BarChart data={formattedData} />
        </Div>
    );
};

export default DeclarationsChartPadding;
