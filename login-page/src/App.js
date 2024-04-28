import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';

function App() {
  return (
<div style={{display: 'flex', gap: '15px' }}>
<LoginForm/>
<RegisterForm/>
</div>
  );
}

export default App;
