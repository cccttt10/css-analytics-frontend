/** @jsx jsx */
import { Properties } from 'global';
import { jsx } from 'theme-ui';
import titleize from 'titleize';

import { Div, Flex, H2, NumberBoard } from '../../layout/';

interface SpacingResetsProps {
    properties: Properties;
}

const SpacingResets: React.FC<SpacingResetsProps> = ({ properties }) => {
    const spacingProperties = [
        'margin',
        'margin-top',
        'margin-left',
        'margin-right',
        'margin-bottom',
        'padding',
        'padding-top',
        'padding-left',
        'padding-right',
        'padding-bottom',
    ];

    return (
        <Div sx={{ py: [3, 4, 5] }}>
            <H2 sx={{ mb: 3 }} children="Spacing Resets" />
            <p sx={{ fontSize: 0, mt: 0 }}>
                The number of times each property is set to 0
            </p>

            <Flex
                wrap="wrap"
                children={spacingProperties.map(prop => {
                    const props = properties[prop] || [];
                    const resets = props.filter(v => v === '0');
                    return (
                        <NumberBoard
                            key={prop}
                            sx={{ mb: 3, width: ['50%', '25%', '20%'] }}
                            title={titleize(prop.replace('-', ' '))}
                            analytics={`${resets.length}`}
                        />
                    );
                })}
            />
        </Div>
    );
};

export default SpacingResets;
