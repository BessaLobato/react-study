import './App.css';
import AnotherComponent from './components/AnotherComponent';
import FirstComponent from './components/FirstComponent';
import Images from './components/Images'
import Hooks from './components/Hooks';
import List from './components/List'
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container'

function App() {
  return (
    <div className='app'>
    <h2>
      Hello React!
      <FirstComponent />
      <AnotherComponent />
      <Images />  
      <Hooks />
      <List />
      <RenderCond x={15} y = {20}/>
      <Fragment />
      <Container>
        <h2>This is a children</h2>
      </Container>
    </h2>
</div>
  );
}
export default App;
