import { GraphData } from 'global';
import React from 'react';

import { Div, LineGraph, SectionTitle } from '../../layout/';

interface RulesetGraphProps {
    data: GraphData;
}

const RulesetChart: React.FC<RulesetGraphProps> = ({ data }) => (
    <Div sx={{ mt: 4 }}>
        <SectionTitle
            title="Ruleset Size"
            description="Number of declarations per ruleset"
        />

        <LineGraph data={data} />
    </Div>
);

export default RulesetChart;
