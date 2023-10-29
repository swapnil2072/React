import reactImg from "./assets/react-core-concepts";
import { CORE_CONCEPTS } from "./Data";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcepts({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            ></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[1]}></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[2]}></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[3]}></CoreConcepts>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
