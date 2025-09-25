import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";

import OnlineOrder from "./components/OnlineOrder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { ThemeProvider } from "./contexts/ThemeContext";
import CategoryPage from "./components/CategoryPage";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Hero />
                  <Menu />
                  <OnlineOrder />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/category/:id" element={<CategoryPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
