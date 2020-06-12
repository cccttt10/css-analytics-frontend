import { Declarations } from 'global';
import uniq from 'lodash.uniq';
import React from 'react';

import { BarChart, Div, SectionTitle } from '../../layout/';

interface DeclarationsChartMarginProps {
    data: Declarations;
}

const DeclarationsChartMargin: React.FC<DeclarationsChartMarginProps> = ({
    data,
}) => {
    const properties = [
        'margin',
        'margin-left',
        'margin-right',
        'margin-top',
        'margin-bottom',
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
            <SectionTitle title="Margin" />
            <BarChart data={formattedData} />
        </Div>
    );
};

export default DeclarationsChartMargin;
