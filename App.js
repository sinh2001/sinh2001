import "./styles.css";
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
export default function App() {
  return (
 <BrowserRouter>
 <Switch>
   <Route path="/" exact>Home Page</Route>
   <Route path="/Product" exact >
  Products Page</Route>
     <Route path="/prodct/add" exact> Product Add</Route>
   <Route path="/product/:id">chi tiet</Route>
   <Route path="/product/:id/edit" exact>update </Route>
   </Switch>
 </BrowserRouter>
  );
}
