import Header from './components/Header';
import Headline from './components/Headline';
import './app.scss';

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline tempArr={tempArr} header="Posts" desc="Click the button to render posts" />
      </section>
    </div>
  );
}

export default App;
