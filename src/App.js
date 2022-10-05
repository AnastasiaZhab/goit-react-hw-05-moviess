import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Layout</div>}>
            <Route path="/about" element={<div>Home</div>} />
            <Route path="/products" element={<div>Movies</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
