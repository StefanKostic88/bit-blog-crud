import { Routes, Route } from "react-router";

import {
  HomePage,
  AboutPage,
  AuthorsPage,
  Root,
  SingleAuthorPage,
  SinglePostPage,
  NewPost,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Root />}>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/:id"} element={<SinglePostPage />} />
        <Route path={"/authors"} element={<AuthorsPage />} />
        <Route path={"/authors/:id"} element={<SingleAuthorPage />} />
        <Route path={"/posts/new"} element={<NewPost />} />
        <Route path={"/about"} element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
