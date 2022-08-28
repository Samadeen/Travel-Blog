import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Data from './data/Data';

function App() {
  const content = Data.map((item) => {
    return (
      <Content
        key={item.id}
        id={item.id}
        title={item.title}
        location={item.location}
        map={item.googleMapsURL}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    );
  });

  console.log(content);

  return (
    <div className='App'>
      <Header />
      {content}
    </div>
  );
}

export default App;
