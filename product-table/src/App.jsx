import "./App.css";
import { PRODUCTS } from "./mock-data";
import { FilterableProductTable } from "./components/FilterableProductTable/FilterableProductTable";

function App() {
  return (
    <>
      <h1 className="title">My products</h1>
      <FilterableProductTable products={PRODUCTS} />
    </>
  );
}

export default App;
