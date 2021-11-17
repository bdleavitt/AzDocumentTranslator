import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import FormUpload from './components/FormUpload';

function App() {
  
  
  return (
    <div className="App">
      <Header title="Document Translator" />,
      <FormUpload />
    </div>
  );
}

export default App;
