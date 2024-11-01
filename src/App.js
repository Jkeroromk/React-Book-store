import React, { useEffect, useState } from 'react';
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import { books } from "./data";
import ScrollToTop from './ScrollToTop'; // Adjust the path as necessary
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }])
  }

  function ChangeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>item.id === book.id
        ? {
          ...item, quantity: +quantity,
        }
        : item
    ));
  };

  function removeBook(book) {
    setCart(cart.filter((item) => item.id !== book.id));
  }

  function numberOfItems() {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    return count;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart])

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Nav numberOfItems={numberOfItems()} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/books" exact render={() => <Books books={books} />} />
          <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart} />} />
          <Route path="/cart" render={() => <Cart books={books} cart={cart} ChangeQuantity={ChangeQuantity} removeBook={removeBook} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



