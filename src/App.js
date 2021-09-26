import "./App.css";
import Header from "./Header";
import EventForm from "./EventForm";
import EventList from "./EventList";

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
