import { Avatar } from './components/DataDisplay/Avatar';
import { Rate } from './components/DataEntry/Rate';
import { Button } from './components/General';

const App = () => {
  return (
    <>
      <Button
        onClick={(e) => {
          console.log(e);
        }}
      >
        hello

      </Button>

      <Avatar alt='avatar' height={200} width={200} src='https://img.docnhanh.vn/images/uploads/2022/11/17/the-thao/messi-khoc.jpg' onClick={() => alert('me')} />
      <Rate rating={3.35} onClick={() => alert('me')}/>
    </>
  );
};

export default App;
