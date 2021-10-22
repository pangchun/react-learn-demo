import './App.css';

// 导入title组件
import Title from './component/title/title';
import HelloButton from './component/helloButton/helloButton';
import { RefButton} from './component/refButton/refButton';
import PropTypeButton from './component/propTypeButton/propTypeButton';

function App(props) {
  return (
    <div className="App">
      <Title></Title>
      <HelloButton></HelloButton>
      <RefButton></RefButton>
      {/* 设置props要传的值，name为字符串，count为数字 */}
      <PropTypeButton name={'测试propTypes'} count={100} ></PropTypeButton>
    </div>
  );
}

export default App;