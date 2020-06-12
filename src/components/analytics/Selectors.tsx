/** @jsx jsx */
import { intComma } from 'humanize-plus';
import { jsx } from 'theme-ui';

import { BigNumberBoard, Div, Flex, H2 } from '../../layout/';

interface SelectorsProps {
    classes: number;
    id: number;
    pseudoClass: number;
    pseudoElement: number;
}

const Selectors: React.FC<SelectorsProps> = ({
    classes,
    id,
    pseudoClass,
    pseudoElement,
}) => {
    return (
        <Div>
            <H2 sx={{ fontSize: 2, mb: 2 }} children="Total Selectors by Type" />
            <p sx={{ opacity: 0.7, mt: 0, mb: 0, fontSize: 1, lineHeight: 1.5 }}>
                Selectors are the part of a CSS ruleset that describes what elements
                in a document the rule will match.
            </p>

            <Flex wrap="wrap">
                <div sx={{ width: ['50%', '25%'] }}>
                    <BigNumberBoard title="ID" analytics={intComma(id)} />
                </div>
                <div sx={{ width: ['50%', '25%'] }}>
                    <BigNumberBoard title="Class" analytics={intComma(classes)} />
                </div>
                <div sx={{ width: ['50%', '25%'] }}>
                    <BigNumberBoard
                        title="Pseudo Class"
                        analytics={intComma(pseudoClass)}
                    />
                </div>
                <div sx={{ width: ['50%', '25%'] }}>
                    <BigNumberBoard
                        title="Pseudo Element"
                        analytics={intComma(pseudoElement)}
                    />
                </div>
            </Flex>
        </Div>
    );
};

export default Selectors;
