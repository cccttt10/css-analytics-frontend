import { Declarations } from 'global';
import { intComma } from 'humanize-plus';
import uniq from 'lodash.uniq';
import React from 'react';

import { BarGraph, Div, SectionTitle } from '../../layout/';

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
        <Div sx={{ mt: 4 }}>
            <SectionTitle
                title="Total vs Unique Declarations"
                description={
                    <span>
                        Out of the <b>{total}</b> total declarations, <b>{unique}</b>{' '}
                        have unique values.
                    </span>
                }
                py={[1, 2, 3]}
            />

            <SectionTitle title="Layout and Structure" />
            <BarGraph data={formattedData} />
        </Div>
    );
};

export default DeclarationsChartLayout;
