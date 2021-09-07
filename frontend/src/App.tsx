import Footer from "components/Footer";
import NavBar from "components/NavBar";
import DataTable from "components/DataTable";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
