import React from "react";
import Header from "./components/header/Header";
import NavigationBar from "./components/navBar/NavigationBar";
import Footer from "./components/footer/Footer";
import CardContainer from "./components/card/CardContainer";

import "./App.css";
import useSessionStorage from "./hooks/useSessionStorage";

function App() {
  const [cards, setCards] = useSessionStorage("cards", []);
  return (
    <div className="app">
      <Header cards={cards} setCards={setCards} />
      <div className="content">
        <NavigationBar />
        <main className="container">
          <CardContainer cards={cards} setCards={setCards} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
