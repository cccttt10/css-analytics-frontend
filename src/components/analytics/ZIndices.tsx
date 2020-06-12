import CSS from 'csstype';
import uniq from 'lodash.uniq';
import React from 'react';

import { Div, SectionTitle, Text } from '../../layout/';

interface ZIndicesProps {
    zIndices: CSS.ZIndexProperty[];
}

const ZIndices: React.FC<ZIndicesProps> = ({ zIndices = [] }) => (
    <Div py={[2, 3, 4]}>
        <SectionTitle
            title={`${uniq(zIndices).length} Unique Z Indices`}
            description={`${zIndices.length} total`}
        />
        {uniq(zIndices).map(zIndex => (
            <Text
                key={zIndex}
                sx={{ mb: 3, mr: 3, fontWeight: 'bold' }}
                inline={true}
                children={zIndex}
            />
        ))}
    </Div>
);

export default ZIndices;
