import { createBrowserRouter, 
  RouterProvider,
} from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleList from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import Layout from './Layout';

const routes = [{
   path: '/',
   element: <Layout />,
   errorElement: <h1>Oh no, you are on a bad path </h1>,
   children: [{
    path: '/',
    element: <HomePage />,
  },{
    path: '/about',
    element: <AboutPage />,
  },{
    path: '/articles',
    element: <ArticleList />, 
  },{
    path: '/articles/:name', // -> /articles/learning-react
    element: <ArticlePage />
  }]
  
}]


const router = createBrowserRouter(routes);

function App() {
  return (
    <> 
    <RouterProvider router={router} />
    </>
   
  );
}

export default App
