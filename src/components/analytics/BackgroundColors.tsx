/** @jsx jsx */
import uniq from 'lodash.uniq';
import { jsx } from 'theme-ui';

import { BackgroundColor, Div, Flex, SectionTitle } from '../../layout/';

interface BackgroundColorsProps {
    backgroundColors: string[];
}

const BackgroundColors: React.FC<BackgroundColorsProps> = ({
    backgroundColors = [],
}) => (
    <div sx={{ py: [4, 5, 6] }}>
        <SectionTitle
            title={`${uniq(backgroundColors).length} Unique Background Colors`}
            description={''}
        />

        <Flex
            wrap="wrap"
            sx={{ mb: [4, 5] }}
            justify="space-between"
            children={uniq(backgroundColors).map(bg => (
                <div
                    key={bg}
                    sx={{
                        p: 2,
                        mb: 2,
                        width: ['25%', '25%', '15%'],
                    }}
                >
                    <BackgroundColor color={bg} />
                </div>
            ))}
        />
        <SectionTitle
            title={`${backgroundColors.length} Total Background Colors`}
            description={'Visualized by source code order'}
        />
        <Div
            style={{
                display: 'table',
                tableLayout: 'fixed',
                width: '100%',
            }}
            children={backgroundColors.map(bg => (
                <div
                    key={bg}
                    sx={{
                        display: 'table-cell',
                        bg: bg,
                        height: '64px',
                    }}
                />
            ))}
        />
        <p sx={{ mt: 4 }}>Sorted by similar values</p>
        <Div
            style={{
                display: 'table',
                tableLayout: 'fixed',
                width: '100%',
            }}
            children={backgroundColors.sort().map(bg => (
                <div
                    key={bg}
                    sx={{
                        display: 'table-cell',
                        bg: bg,
                        height: '64px',
                    }}
                />
            ))}
        />
    </div>
);

export default BackgroundColors;
