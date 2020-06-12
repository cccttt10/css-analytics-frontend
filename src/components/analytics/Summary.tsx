/** @jsx jsx */
import { intComma } from 'humanize-plus';
import { jsx } from 'theme-ui';

import { BigNumberBoard, Flex, H2 } from '../../layout/';

interface SummaryProps {
    rules: number;
    selectors: number;
    declarations: number;
    properties: number;
}

const Summary: React.FC<SummaryProps> = ({
    rules,
    selectors,
    declarations,
    properties,
}) => (
    <div
        sx={{
            mt: 3,
        }}
    >
        <H2 sx={{ fontSize: 2, mb: 2 }} children="Overview" />
        <Flex wrap="wrap">
            <Flex sx={{ width: ['50%', '50%', '25%'] }}>
                <BigNumberBoard title="Rules" analytics={intComma(rules)} />
            </Flex>

            <Flex sx={{ width: ['50%', '50%', '25%'] }}>
                <BigNumberBoard title="Selectors" analytics={intComma(selectors)} />
            </Flex>

            <Flex sx={{ width: ['50%', '50%', '25%'] }}>
                <BigNumberBoard
                    title="Declarations"
                    analytics={intComma(declarations)}
                />
            </Flex>

            <Flex sx={{ width: ['50%', '50%', '25%'] }}>
                <BigNumberBoard
                    title="Properties"
                    analytics={intComma(properties)}
                />
            </Flex>
        </Flex>
    </div>
);

export default Summary;
