import logo from './logo.svg';
import './App.css';


function LoggedIn(){
  return <button>LOGOUT</button>;
}

function NotLoggedIn(){
  return <button>Login</button>;
}

function LoginControl(props){
  const LoginStatus = props.LoginStatus

  return (
    <>
      {LoginStatus ? <LoggedIn/> : <NotLoggedIn/>}
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
      
      <div>
        <h1>Moja aplikacja</h1>

        <LoginControl LoginStatus={false}/>
      </div>

          

    </div>
  );
}

export default App;
