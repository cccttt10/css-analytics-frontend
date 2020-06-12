/* eslint-disable @typescript-eslint/no-var-requires */
import CSS from 'csstype';
import { GraphData } from 'global';
import React from 'react';

import _BackgroundColor from './BackgroundColor';
import _BarGraph from './BarGraph';
import _BigNumberBoard from './BigNumberBoard';
import _Button from './Button';
import _CodeBlock from './CodeBlock';
import _Color from './Color';
import _Container from './Container';
import _Dd from './Dd';
import _Div from './Div';
import _Dl from './Dl';
import _Dt from './Dt';
import _Flex from './Flex';
import _Font from './Font';
import _Footer from './Footer';
import _Form from './Form';
import _H1 from './H1';
import _H2 from './H2';
import _Header from './Header';
import _Hr from './Hr';
import _Input from './Input';
import _Label from './Label';
import _LineGraph from './LineGraph';
import _Link from './Link';
import _LinkBox from './LinkBox';
import _Loading from './Loading';
import _Logo from './Logo';
import _NumberBoard from './NumberBoard';
import _Pre from './Pre';
import _SectionTitle from './SectionTitle';
import _SubHeader from './SubHeader';
import _Svg from './Svg';
import _Text from './Text';
import _TextCenter from './TextCenter';

interface BasicProps {
    style?: React.CSSProperties;
    id?: string;
}

interface GraphProps extends BasicProps {
    data: GraphData;
}

interface BackgroundColorProps extends BasicProps {
    color: string;
}
export const BackgroundColor: React.FC<BackgroundColorProps> = _BackgroundColor;

export const BarGraph: React.FC<GraphProps> = _BarGraph;

interface BigNumberBoardProps extends BasicProps {
    title: string;
    analytics: string;
}
export const BigNumberBoard: React.FC<BigNumberBoardProps> = _BigNumberBoard;

export const Button: React.FC<BasicProps> = _Button;

export const CodeBlock: React.FC<BasicProps> = _CodeBlock;

interface ColorProps extends BasicProps {
    color: CSS.ColorProperty;
}
export const Color: React.FC<ColorProps> = _Color;

export const Container: React.FC<BasicProps> = _Container;

export const Dd: React.FC<BasicProps> = _Dd;

interface DivProps extends BasicProps {
    width?: number[];
}
export const Div: React.FC<DivProps> = _Div;

export const Dl: React.FC<BasicProps> = _Dl;

export const Dt: React.FC<BasicProps> = _Dt;

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
    wrap?: CSS.FlexWrapProperty | CSS.FlexWrapProperty[];
    justify?: CSS.JustifyContentProperty;
    order?: CSS.OrderProperty;
}
export const Flex: React.FC<FlexProps> = _Flex;

export const Font: React.FC<BasicProps> = _Font;

export const Footer: React.FC<BasicProps> = _Footer;

export const Form: React.FC<BasicProps> = _Form;

export const H1: React.FC<BasicProps> = _H1;

export const H2: React.FC<BasicProps> = _H2;

export const Header: React.FC<BasicProps> = _Header;

export const Hr: React.FC<BasicProps> = _Hr;

export const Input: React.FC<BasicProps> = _Input;

export const Label: React.FC<BasicProps> = _Label;

export const LineGraph: React.FC<GraphProps> = _LineGraph;

interface LinkProps extends BasicProps {
    display?: CSS.DisplayProperty;
    fontWeight?: CSS.FontWeightProperty;
    href: string;
}
export const Link: React.FC<LinkProps> = _Link;

export const LinkBox = _LinkBox;

interface LoadingProps extends BasicProps {
    color?: CSS.ColorProperty;
    height?: CSS.HeightProperty<number>;
    width?: CSS.WidthProperty<number>;
}
export const Loading: React.FC<LoadingProps> = _Loading;

interface LogoProps extends BasicProps {
    color: CSS.ColorProperty;
    size: CSS.HeightProperty<number> & CSS.WidthProperty<number>;
}
export const Logo: React.FC<LogoProps> = _Logo;

interface NumberBoardProps extends BasicProps {
    title: string;
    analytics: string;
}
export const NumberBoard: React.FC<NumberBoardProps> = _NumberBoard;

export const Pre: React.FC<BasicProps> = _Pre;

interface SectionTitleProps extends BasicProps {
    title: string;
    description?: React.ReactNode;
}
export const SectionTitle: React.FC<SectionTitleProps> = _SectionTitle;

interface SubHeaderProps extends BasicProps {
    title: string;
    description: string;
}
export const SubHeader: React.FC<SubHeaderProps> = _SubHeader;

export const Svg: React.FC<BasicProps> = _Svg;

interface TextProps extends BasicProps {
    uppercase?: boolean;
    inline?: boolean;
}
export const Text: React.FC<TextProps> = _Text;

export const TextCenter: React.FC<BasicProps> = _TextCenter;
