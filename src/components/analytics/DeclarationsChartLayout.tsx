import { Declarations } from 'global';
import { intComma } from 'humanize-plus';
import uniq from 'lodash.uniq';
import React from 'react';

import { BarChart, Div, SectionTitle } from '../../layout/';

interface DeclarationsChartLayoutProps {
    data: Declarations;
}

const DeclarationsChartLayout: React.FC<DeclarationsChartLayoutProps> = ({
    data,
}) => {
    const total = intComma(data.total);
    const unique = intComma(data.unique);

    const properties = [
        'display',
        'float',
        'width',
        'height',
        'max-width',
        'min-width',
        'max-height',
        'min-height',
    ];

    const formattedData = [
        properties.map(p => ({ x: p, y: (data.properties[p] || []).length })),
        properties.map(p => ({
            x: p,
            y: uniq(data.properties[p] || []).length,
        })),
    ];

    return (
        <Div sx={{ pt: [4, 5, 6] }}>
            <SectionTitle
                title="Total vs Unique Declarations"
                description={
                    <span>
                        Out of the <b>{total}</b> total declarations, <b>{unique}</b>{' '}
                        have unique values.
                    </span>
                }
            />
            <p>
                The comparison charts below can help you identify which properties
                might be the best candidates for creating abstractions.
            </p>
            <SectionTitle title="Layout and Structure" />
            <BarChart data={formattedData} />
        </Div>
    );
};

export default DeclarationsChartLayout;
