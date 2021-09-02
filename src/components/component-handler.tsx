import ColorBlock, { ColorBlockProps } from './color-block';
import ButtonDisplay, { ButtonDisplayProps } from './button-display';

interface ColorBlockConfig extends ColorBlockProps {
  type: 'color-block';
}

interface ButtonDisplayConfig extends ButtonDisplayProps {
  type: 'button-display';
}
interface IncludeDebug {
  debug?: boolean;
}

export type Config = ColorBlockConfig | ButtonDisplayConfig;

interface ShortformProps extends IncludeDebug {
  config: Config;
}

type LongformProps = ColorBlockConfig | ButtonDisplayConfig;

export interface OverloadedComponentHandler {
  (props: ShortformProps): JSX.Element;
  (props: LongformProps & { debug?: boolean }): JSX.Element;
}

const ComponentHandler: OverloadedComponentHandler = (props) => {
  const { debug } = props;
  const { config } = props as ShortformProps;
  const { type } = props as LongformProps;

  if (debug) {
    console.log(props);
  }

  switch (type ?? config.type) {
    case 'button-display': {
      const { initialClicks, text } = (config as ButtonDisplayConfig) ?? props;
      return <ButtonDisplay text={text} initialClicks={initialClicks} />;
    }
    case 'color-block': {
      const { text, color } = (config as ColorBlockConfig) ?? props;
      return <ColorBlock text={text} color={color} />;
    }
    default:
      throw new Error('Not a valid type.');
  }
};

export default ComponentHandler;
