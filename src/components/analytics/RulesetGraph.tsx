import { GraphData } from 'global';
import React from 'react';

import { Div, LineGraph, SectionTitle } from '../../layout/';

interface RulesetGraphProps {
    data: GraphData;
}

const RulesetChart: React.FC<RulesetGraphProps> = ({ data }) => (
    <Div mt={4} py={[2, 3, 4]}>
        <SectionTitle
            title="Ruleset Size"
            description="Number of declarations per ruleset"
        />

        <LineGraph data={data} />
    </Div>
);

export default RulesetChart;
