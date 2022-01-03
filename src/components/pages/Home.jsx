import Card from "../shared/Card";
import Todos from "../Todos";

const Home = () => {
  return (
    <Card isBig>
      <section className="bg-gray-300">
        <h2>My Todos List</h2>
        <Todos />
      </section>
    </Card>
  );
};

export default Home;
