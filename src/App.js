import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header';
import Home from './components/Home';
import Posts from './components/Posts';
import About from './components/About';
import PostForm from './containers/PostForm';
import PostDetails from './containers/PostDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='mt-5'>
          
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/posts' component={Posts} exact/>
            <Route path='/posts/new' component={PostForm}/>
            {/* The following URL is having URL Param - id */ }
            <Route path='/posts/:id' component={PostDetails} /> 
            <Route path='/about' component={About} />
          </Switch>

        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
