/* eslint-disable @typescript-eslint/no-var-requires */
import CSS from 'csstype';
import React, { CSSProperties } from 'react';

interface BasicProps {
    style?: CSSProperties;
    id?: string;
}

interface BackgroundColorProps extends BasicProps {
    color: string;
}

interface BarChartProps extends BasicProps {
    data: {
        x: string;
        y: number;
    }[][];
}
export const BarChart: React.FC<BarChartProps> = require('./BarChart');

export const BackgroundColor: React.FC<BackgroundColorProps> = require('./BackgroundColor');

interface BigNumberBoardProps extends BasicProps {
    analytics: string;
}
export const BigNumberBoard: React.FC<BigNumberBoardProps> = require('./BigNumberBoard');

export const Button: React.FC<BasicProps> = require('./Button');

export const CodeBlock: React.FC<BasicProps> = require('./CodeBlock');

interface ColorProps extends BasicProps {
    color: CSS.ColorProperty;
}
export const Color: React.FC<ColorProps> = require('./Color');

export const Container: React.FC<BasicProps> = require('./Container');

export const Dd: React.FC<BasicProps> = require('./Dd');

export const Div: React.FC<BasicProps> = require('./Div');

export const Dl: React.FC<BasicProps> = require('./Dl');

export const Dt: React.FC<BasicProps> = require('./Dt');

interface FlexProps extends BasicProps {
    flex?: CSS.FlexProperty<string>;
    alignContent?: CSS.AlignContentProperty;
    alignItems?: CSS.AlignItemsProperty;
    self?: CSS.AlignSelfProperty;
    basis?: CSS.FlexBasisProperty<string>;
    direction?: CSS.FlexDirectionProperty;
    flow?: CSS.FlexFlowProperty;
    grow?: CSS.FlexGrowProperty;
    shrink?: CSS.FlexShrinkProperty;
    wrap?: CSS.FlexWrapProperty;
    justify?: CSS.JustifyContentProperty;
    order?: CSS.OrderProperty;
}
export const Flex: React.FC<FlexProps> = require('./Flex');

export const Font: React.FC<BasicProps> = require('./Font');

export const Footer: React.FC<BasicProps> = require('./Footer');

export const Form: React.FC<BasicProps> = require('./Form');

export const H1: React.FC<BasicProps> = require('./H1');

export const H2: React.FC<BasicProps> = require('./H2');

export const Header: React.FC<BasicProps> = require('./Header');

export const Hr: React.FC<BasicProps> = require('./Hr');

export const Input: React.FC<BasicProps> = require('./Input');

export const Label: React.FC<BasicProps> = require('./Label');

interface LinkProps extends BasicProps {
    display: CSS.DisplayProperty;
    fontWeight: CSS.FontWeightProperty;
}
export const Link: React.FC<LinkProps> = require('./Link');

interface LoadingProps extends BasicProps {
    color: CSS.ColorProperty;
    height: CSS.HeightProperty<number>;
    width: CSS.WidthProperty<number>;
}
export const Loading: React.FC<LoadingProps> = require('./Loading');

interface LogoProps extends BasicProps {
    color: CSS.ColorProperty;
    size: CSS.HeightProperty<number> & CSS.WidthProperty<number>;
}
export const Logo: React.FC<LogoProps> = require('./Logo');

interface NumberBoardProps extends BasicProps {
    title: string;
    analytics: string;
}
export const NumberBoard: React.FC<NumberBoardProps> = require('./NumberBoard');

export const Pre: React.FC<BasicProps> = require('./Pre');

interface SectionTitleProps extends BasicProps {
    title: string;
    description: string;
}
export const SectionTitle: React.FC<SectionTitleProps> = require('./SectionTitle');

interface SubHeaderProps extends BasicProps {
    title: string;
    description: string;
}
export const SubHeader: React.FC<SubHeaderProps> = require('./SubHeader');

export const Svg: React.FC<BasicProps> = require('./Svg');

interface TextProps extends BasicProps {
    uppercase: boolean;
    inline: boolean;
}
export const Text: React.FC<TextProps> = require('./Text');

export const TextCenter: React.FC<BasicProps> = require('./TextCenter');
