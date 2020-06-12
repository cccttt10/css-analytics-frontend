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
    <Div py={[2, 3, 4]}>
        <SectionTitle title="Specificity" />
        <Flex alignItems="top" my={3} wrap={['wrap', 'wrap', 'nowrap']}>
            <NumberBoard mr={5} title="Average score" analytics={`${average}`} />
            <NumberBoard mr={5} title="Max score" analytics={`${max}`} />
            <Text mt={0} width={1} style={{ lineHeight: 1.5 }}>
                Generally, lower specificity scores and flatter curves mean better
                maintainability.
                <Link
                    ml={2}
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"
                >
                    Learn More
                </Link>
            </Text>
        </Flex>
        <LineGraph data={data} />
    </Div>
);

export default SpecificityGraph;
