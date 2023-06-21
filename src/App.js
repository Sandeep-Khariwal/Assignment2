import { Route , Routes } from 'react-router-dom';
import Allusers from './component/Allusers';

import './App.scss';
import "./style/form.scss"
import "./style/list.scss"
import Form from './component/Form';
import Editform from './component/Editform';

function App() {

  return (
    <div>
     <Routes>
      <Route path='/' element={ <Allusers/>} />
      <Route path='/create' element={ <Form/>} />
      <Route path='/edit' element={ <Editform  /> } />
     </Routes>
    </div>
  );
}

export default App;
