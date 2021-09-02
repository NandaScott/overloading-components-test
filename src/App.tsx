import './App.css';
import ComponentHandler from './components/component-handler';
import { Config } from './components/component-handler';
import { Element } from './components/element-example';

const configs: Config[] = [
  {
    type: 'color-block',
    text: 'Lorem',
    color: 'red',
  },
  {
    type: 'color-block',
    text: 'Ipsum',
    color: 'blue',
  },
  {
    type: 'color-block',
    text: 'Dolor',
    color: 'yellow',
  },
  {
    type: 'button-display',
    text: 'You have clicked me',
    initialClicks: 0,
  },
];

function App() {
  return (
    <div className='root'>
      {configs.map((val) => (
        <ComponentHandler config={val} />
      ))}
      <ComponentHandler
        config={{ type: 'button-display', initialClicks: 0, text: 'Foo' }}
      />
      <ComponentHandler type='button-display' text='ASDF' />
      <Element as='div'>Hello World</Element>
    </div>
  );
}

export default App;
