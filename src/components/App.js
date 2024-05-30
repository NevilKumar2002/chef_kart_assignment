
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import DateTime from './DateTime';
import CategoryBar from './CategoryBar';
import TrendingDishes from './TrendingDishes';
import Main from './Main/Main';
import Ingredients from './Ingredients/Ingredients';
import Calendar from './Calender';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={
          <>
          <Navbar />
          <DateTime />
          <CategoryBar />
          <TrendingDishes/>
          {/* <Calendar /> */}
          <hr />
          <Main/>
          </>
        }/>
        <Route path='/ingredients/:dishId' element={
        <>
          <div style={{height : '14px'}}></div>
          <Navbar />
          <Ingredients />
        </>
        } />
      </Routes>
      
    </div>
  );
}

export default App;