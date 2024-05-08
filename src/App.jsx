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
        <Route path="/app-ads.txt" element={<div>google.com, pub-8202922806431205, DIRECT, f08c47fec0942fa0</div>} />
      </Routes>
    </>
  );
}

export default App;
