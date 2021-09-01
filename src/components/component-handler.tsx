import ColorBlock, { ColorBlockProps } from './color-block';
import ButtonDisplay, { ButtonDisplayProps } from './button-display';

interface IncludeDebug {
  debug?: boolean;
}

interface ColorBlockConfig extends ColorBlockProps {
  type: 'color-block';
}

interface ButtonDisplayConfig extends ButtonDisplayProps {
  type: 'button-display';
}

export type Config = ColorBlockConfig | ButtonDisplayConfig;

interface ShortformProps extends IncludeDebug {
  config: Config;
}

interface LongformProps
  extends Required<ColorBlockProps>,
    Required<ButtonDisplayProps>,
    IncludeDebug {
  component: 'colorBlock' | 'buttonDisplay';
}

type ComponentHandlerProps = ShortformProps | LongformProps;

export function ComponentHandler(props: LongformProps): React.ReactElement;
export function ComponentHandler(props: ShortformProps): React.ReactElement;
export default function ComponentHandler(props: ComponentHandlerProps) {
  const { debug } = props;
  const { config } = props as ShortformProps;
  const { initialClicks, text, color, component } = props as LongformProps;

  if (debug) {
    console.log('Debug active');
  }

  const components = {
    colorBlock: ColorBlock,
    buttonDisplay: ButtonDisplay,
  };

  const LongComponent = components[component] ?? null;
  const FullComponent = () => (
    <LongComponent text={text} initialClicks={initialClicks} color={color} />
  );

  const ShortComponent = () => {
    switch (config.type) {
      case 'button-display': {
        const { initialClicks, text } = config;
        return <ButtonDisplay text={text} initialClicks={initialClicks} />;
      }
      case 'color-block': {
        const { text, color } = config;
        return <ColorBlock text={text} color={color} />;
      }
      default:
        throw new Error('Not a valid type.');
    }
  };

  return (
    <>
      {!config && <FullComponent />}
      {config && <ShortComponent />}
    </>
  );
}
