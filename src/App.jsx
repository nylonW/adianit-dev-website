import { Routes, Route } from "@solidjs/router";
import Tos from './tos';
import Pp from './pp';
import Home from './home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/tos" component={Tos} />
        <Route path="/pp" component={Pp} />
      </Routes>
    </>
  );
}

export default App;
