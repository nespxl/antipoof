import './style/index.css'
import FormRegistration from "./components/FormRegistration";
import {
  BrowserRouter as Router,
  useRoutes
} from 'react-router-dom';
import { useEffect } from 'react'
import List from './components/List';
import Item from './components/Item';
import { useAppDispatch } from './hooks/customHookQuery';
import { API } from './API/API';

function App() {
  const dispatch = useAppDispatch()
  const pageArray = [1]

  localStorage.setItem('pageArray', JSON.stringify(pageArray))
  let pageUsers = JSON.parse(localStorage.getItem('setPage') || '[]')
  if(window.location.href.indexOf('/list/')) {
    const changeUrl = window.location.href.slice(window.location.href.lastIndexOf('/') + 1)
    localStorage.setItem('setPage', JSON.stringify(changeUrl))
    pageUsers = changeUrl
  }

  useEffect(() => {
    dispatch(API(`https://reqres.in/api/users?page=${pageUsers}`))
  }, [pageUsers])

  const Path = () => {
    const routes = useRoutes([
      { path: '/', element: <FormRegistration /> },
      { path: '/list/:id', element: <List /> },
      { path: '/list/:id/item/:id', element: <Item /> }
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
