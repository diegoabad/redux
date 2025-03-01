import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './redux/actions/countAction';
import { login } from './redux/actions/authAction';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.count);
  const { user, loading, error } = useSelector((state) => state.auth);

  const handleReset = () => {
    dispatch(reset());
  };
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleLogin = () => {
    dispatch(login({ email: 'diego@diego.com', password: '123456' }));
  };

  return (
    <>
      <h1>CONTADOR - REDUX</h1>
      <p>Contador: {count}</p>
      {error && <p>{error}</p>}
      {loading && <p>Cargando Usuario...</p>}
      <p>User: {user?.name}</p>
      <button onClick={handleDecrement}>Decrementar</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default App;
