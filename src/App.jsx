// import logo from './logo.svg';
import "./App.css";
// import ClickCounter from "./Render/ClickCounter";
// import Counter from "./Render/Counter";
// import Section from "./Render/Section";
// import HoverCounter from "./Render/HoverCounter";

// import UseReducerComponent from "./Hooks/UseReducerComponent";
// import Home from "./StyledComponents/Home";

// import Clock from "./components/Clock";
// import ClockList from "./components/ClockList";
// import Form from "./components/Form";
// import CharacterList from "./GraphQl/CharacterList";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "./Router/Home";
// import About from "./Router/About";
// import Navbar from "./Router/Navbar";
// import Services from "./Router/Services";
// import Error from "./Router/Error";
// import Dashboard from "./Router/Dashboard";
// import Character from "./GraphQl/Character";
// import Search from "./GraphQl/Search";
// import Posts from "./Redux/Posts";
// import { Provider } from "react-redux";
// import store from "./Redux/store";
import DisplayComponent from "./ReduxToDo/DisplayComponent";

function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Clock /> */}
      {/* <ClockList quantity={3}/> */}
      {/* <Form /> */}
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard/:course" element={<Dashboard />} />
        <Route path="/services" element={<Services number="5" />} />
        <Route path="/login" element={<Navigate to="/about" />} />

        <Route path="*" element={<Error />} />
      </Routes> */}
      {/* <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<Character />} />
      </Routes> */}

      {/* <Counter
        renderProp={(c, ICF) => <ClickCounter count={c} increaseCount={ICF} />}
      /> */}
      {/* <Counter renderProp={(c, ICF) => <HoverCounter cnt={c} ic={ICF} />} /> */}
      {/* <Section /> */}
      {/* <UseReducerComponent /> */}
      {/* <Home /> */}
      {/* <Posts /> */}
      <DisplayComponent />
    </div>
    // </Provider>
  );
}

export default App;
