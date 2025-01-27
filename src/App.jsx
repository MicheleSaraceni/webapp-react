import DefaultLayout from "./components/DefaultLayout";
import MoviesHome from "./pages/MoviesHome";
import MovieDetails from "./pages/MovieDetails"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/">
              <Route index element={<MoviesHome />} />
              <Route path=":id" element={<MovieDetails />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
