import { useState } from 'react';
import RegistrationForm from './components/Registration';
import FormikForm from './components/formikForm';
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{padding:"20px"}}>
      <RegistrationForm />
      <hr />
      <FormikForm />
    </div>
  );
}

export default App
