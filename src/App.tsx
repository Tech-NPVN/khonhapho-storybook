import { Button } from './components/General';

const App = () => {
  return (
    <Button
      onClick={(e) => {
        console.log(e);
      }}
    >
      hello
    </Button>
  );
};

export default App;
