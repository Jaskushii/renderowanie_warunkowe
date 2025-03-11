import logo from './logo.svg';
import './App.css';


function loggedIn(){
  return <button>LOGOUT</button>;
}

function notLoggedIn(){
  return <button>Login</button>;
}

function LoginControl(props){
  const LoginStatus = props.LoginStatus

  return (
    <>
      {LoginStatus ? <loggedIn/> : <notLoggedIn/>}
    </>
  )
}

function App() {
  return (
    <div className="App">
      {/*Zadanie 1: Warunkowe wyświetlanie przycisku 
      Cel: Stwórz komponent LoginControl, który wyświetla różne przyciski w zależności od tego, czy użytkownik jest zalogowany.
      Instrukcja: 
      Stwórz komponent LoginControl. 
      Jeśli użytkownik jest zalogowany, pokaż przycisk "Logout". 
      Jeśli użytkownik NIE jest zalogowany, pokaż przycisk "Login". 
      Po kliknięciu zmień stan zalogowania użytkownika. 
      */}
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<LoginControl LoginStatus={false}/>)
     
        

          

    </div>
  );
}

export default App;
