import { GraphData } from 'global';
import React from 'react';

import {
    Div,
    Flex,
    LineGraph,
    Link,
    NumberBoard,
    SectionTitle,
    Text,
} from '../../layout/';

interface SpecificityGraphProps {
    data: GraphData;
    average: number;
    max: number;
}

const SpecificityGraph: React.FC<SpecificityGraphProps> = ({
    data,
    average,
    max,
}) => (
    <Div>
        <SectionTitle title="Specificity" />
        <Flex alignItems="top" sx={{ my: 3 }} wrap={['wrap', 'wrap', 'nowrap']}>
            <NumberBoard
                sx={{ mr: 5 }}
                title="Average score"
                analytics={`${average}`}
            />
            <NumberBoard sx={{ mr: 5 }} title="Max score" analytics={`${max}`} />
            <Text sx={{ mt: 0, width: 1 }} style={{ lineHeight: 1.5 }}>
                Base 10 specificity score for each selector by source order.
                Generally, lower scores and flatter curves are better for
                maintainability.
                <Link
                    sx={{ ml: 2 }}
                    href="https://csswizardry.com/2014/10/the-specificity-graph/"
                >
                    Learn More
                </Link>
            </Text>
        </Flex>
        <LineGraph data={data} />
    </Div>
);

export default SpecificityGraph;
