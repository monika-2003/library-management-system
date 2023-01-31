import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import AvailableCategories from './pages/AvailableCategories';
import ReturnBooks from './pages/ReturnBooks';
import IssueBooks from './pages/IssueBooks';
import LateSubmission from './pages/LateSubmission';

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<SignIn />} />
            <Route  path='/sign-up' element={<SignUp/>} />
            <Route path='/home' element={<Home />} />
            <Route path='/available-books' element={<AvailableCategories />} />
            <Route path='/return-books' element={<ReturnBooks />} />
            <Route path='/issue-books' element={<IssueBooks />} />
            <Route path='/late-submission' element={<LateSubmission />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
