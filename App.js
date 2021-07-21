import './App.css';
import restaurant from './restaurant.jpg';

function Header(props) {
  //console.log(props); //default an empty object
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img 
      src={restaurant} 
      height="500px" 
      alt="a resturant table" />

      <ul style={{ textAlign: "Left" }}>
        {props.dishes.map((dish) => (
        <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
      
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

// array with strings

const dishes = [
  "Pizza",
  "Burger",
  "Vegan Mac'n Cheese",
  "Red Lentil Soup"
];


// turns stings into objects using the map function
const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));  
console.log(dishObjects);


// The main function that returns content to Index.js for rendering
function App() {
  return (
    <div className="App">
      <Header name="Rune" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} /> 
    </div>
  );
}

export default App;
