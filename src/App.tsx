import { Tabs } from './components/DataDisplay';

const App = () => {
  return (
    <Tabs
      variantTab="fillGray"
      tabs={[
        {
          name: 'Tab 1',
          key: 'a',
          children: <>AAAA</>,
        },
        {
          name: 'Tab 2',
          key: 'b',
          children: <>BBBB</>,
        },
        {
          name: 'Tab 3',
          key: 'c',
          children: <>C</>,
        },
        {
          name: 'Tab 4',
          key: 'd',
          children: <>D</>,
        },
      ]}
    />
  );
};

export default App;
