import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Welcome } from './pages/Welcome';
import { NoPage } from './pages/NoPage';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { AuthLayout } from './layout/AuthLayout';
import { TaskList } from './pages/TaskList';
import { AccountLayout } from './layout/AccountLayout';
import { Task } from './pages/Task';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Welcome />} />

        <Route Component={AuthLayout}>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>

        <Route Component={AccountLayout}>
          <Route path='/tasks' element={<TaskList />} />
          <Route path='/tasks/:id' element={<Task />} />
        </Route>

        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
