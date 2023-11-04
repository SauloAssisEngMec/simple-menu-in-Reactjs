const Footer = () => {
    // const hour = new Date().toLocaleTimeString();
    const hour = new Date().getHours();
    const openHour = 11;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
  
    return (
      <footer className="footer">
        {isOpen && (
          <div className="order">
            <p>we are open folks!!!</p>
            <button className="btn">order</button>
          </div>
        )}
  
        {/* {isOpen ? (
          <p>we are open folks!!!</p>
        ) : (
          <p>Close, were going to be open at {openHour}</p>
        )} */}
      </footer>
    );
    // return React.createElement("footer", null, "we are open folks!!!");
  };
  export default Footer