import Dictionary from './Dictionary';



import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header>Dictionary App</header>

     <Dictionary defaultKeyword="Dictionary"/>

    <footer>This project was coded by 👩🏻‍💻 <a href="https://github.com/belram990" target="_blank" rel="noreferrer">Donabel Liotta</a> {" "}
    and is open-sourced on <a href="https://github.com/belram990/dictionary-project" target="_blank" rel="noreferrer">GitHub</a>{" "}
    and hosted on <a href="https://dl-dictionary-app.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>.
    </footer>
    </div>
    </div>
  );
}

export default App;
