import Card from "../shared/Card";
import Todos from "../Todos";

const Home = () => {
  return (
    <Card isBig>
      <section className="bg-gray-300 p-4 rounded">
        <h2 className="p-2 text-center text-3xl font-bold">My Todos List</h2>
        <Todos />
      </section>
    </Card>
  );
};

export default Home;
