import React from 'react';

import Div from './Div';
import LineChart from './LineChart';
import SectionTitle from './SectionTitle';

const RulesChart = ({ data }) => (
    <Div mt={4}>
        <SectionTitle
            title="Ruleset Size"
            description="Number of declarations per ruleset"
        />

        <LineChart data={data} />
    </Div>
);

export default RulesChart;
