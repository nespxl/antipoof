import './style/index.css'
import FormRegistration from "./components/FormRegistration";
import { 
  BrowserRouter as Router,
  useRoutes
} from 'react-router-dom';
import { useEffect } from 'react'
import List from './components/List';
import Item from './components/Item';
import { useAppDispatch, useAppSelector } from './hooks/customHookQuery';
import { API } from './API/API';

function App() {

  const dispatch = useAppDispatch()
  const {page} = useAppSelector(state => state.slicePostArray)
  const pageArray = [1]
  
  localStorage.setItem('pageArray', JSON.stringify(pageArray))

  useEffect(() => {
    dispatch(API(`https://reqres.in/api/users?page=${page}`))
  }, [page])

  const Path = () => {
    const routes = useRoutes([
      { path: '/', element: <FormRegistration /> },
      { path: '/list/:page', element: <List /> },
      { path: '/list/item/:id', element: <Item />}
    ])
    return routes
  }

  return (
    <div className='container'>
      <Router>
        <Path />
      </Router>
    </div>
  );
}

export default App;
