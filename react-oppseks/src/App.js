import { Routes, Route, } from 'react-router-dom'
import Actor from './components/Actor'
import ActorName from './components/ActorName'
import Movie from './components/Movies'
function App() {
  return (
    <div>
    {/* <Movie />
    <Movies /> */}
    <Routes>
      {/* <Route element={<DefaultLayout />}> */}
        <Route index element={<Movie />} />
          <Route path="/" element={<Movie />} />
          <Route path="actors">
            <Route index element={<ActorName />} />
            <Route path=":slug" element={<Actor />} />
        </Route>
      {/* </Route> */}
    </Routes>
    </div>
  );
}

export default App;



