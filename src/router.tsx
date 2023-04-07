
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages';



const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

//<Route index element={<Navigate to="/Components" replace />} />
//<Route path="/Components" element={<ComponentPage />}></Route>
//<Route path="/Theme" element={<ColorSystem />}></Route>

export default App