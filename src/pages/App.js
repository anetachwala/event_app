import "../style/App.css";
import Header from "./components/Header";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";

function App() {
  return (
    <div className="App">
      <Header />
      <EventList />
      <EventForm />
    </div>
  );
}

export default App;
