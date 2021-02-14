import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';

// export default function App() {
//    return (
//       <div>
//          This from app
//       </div>
//    )
// }
class App extends Component {
   render() {
      return (
         <Fragment>
            <Header/>
            <div className="container">
               <Dashboard/>
            </div>
         </Fragment>
      )
   }
}
export default App;
ReactDOM.render(<App/>,document.getElementById("app"))