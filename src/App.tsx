import { GlobalStyles } from "./styles/global";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header/Header";
import { fetchDates } from "./helpers/fetchDates";
import { NewEvent } from "./pages/Event/NewEvent/NewEvent";
import DetailsEvent from "./pages/Event/DetailsEvent/DetailsEvent";
import { MyContextProvider } from "./contexts/CalendarContext";
import { EditEvent } from "./pages/Event/EditEvent";
import Instructions from "./pages/Instructions/Instructions";
import NotFound from "./pages/404/NotFound";

fetchDates();

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <MyContextProvider value={{ id: "", setId: () => { } }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-item" element={<NewEvent />} />
            <Route path="/item/:id" element={<DetailsEvent />} />
            <Route path="/edit-item/:id" element={<EditEvent />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MyContextProvider>
      </Router>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
    </>
  );
}

export default App;
