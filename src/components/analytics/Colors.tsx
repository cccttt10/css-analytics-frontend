/** @jsx jsx */
import uniq from 'lodash.uniq';
import { jsx } from 'theme-ui';

import { Color, Div, Flex, SectionTitle } from '../../layout/';

interface ColorsProps {
    colors: string[];
}

const Colors: React.FC<ColorsProps> = ({ colors = [] }) => (
    <Div>
        <h2 id="colors" sx={{ fontSize: 5 }}>
            Colors
        </h2>
        <SectionTitle
            title={`${uniq(colors).length} unique colors`}
            description="Printed by declaration order in source code"
        />
        <Flex
            wrap="wrap"
            sx={{ mb: 5 }}
            children={uniq(colors).map(color => (
                <Div key={color} sx={{ mb: 2, width: [2 / 5, 1 / 3, 1 / 8] }}>
                    <Color color={color} />
                </Div>
            ))}
        />
        <SectionTitle
            title={`${colors.length} total color declarations`}
            description="Sorted by like values"
        />
        <Flex
            wrap="wrap"
            children={colors.sort().map(color => (
                <Div
                    sx={{ fontSize: '32px', fontWeight: 900, color: color }}
                    key={color}
                    children="A"
                    // title={color}
                />
            ))}
        />
    </Div>
);

export default Colors;
