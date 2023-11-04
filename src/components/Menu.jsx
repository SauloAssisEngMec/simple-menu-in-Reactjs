import pizzaData from "./../data/data"
import Pizza from "../views/Pizza";

export default function Menu() {
    const numPizzas = pizzaData.length;
    return (
      <main className="menu">
        <h2>Menu</h2>
        {numPizzas > 0 ? (
          <ul className="pizzas">
            {pizzaData.map((pizza) => {
              return <Pizza pizzaObj={pizza} key={pizza.name} />;
            })}
          </ul>
        ) : (
          "We are working on our Menu. Please come back later"
        )}
      </main>
    );
  }