import Card from "../shared/Card";
import Todos from "../Todos";

const Home = () => {
  return (
    <Card isBig>
      <section className="bg-gray-200 p-4 rounded">
        <h2 className="p-2 text-center text-4xl font-bold mb-6">My Todos List</h2>
        <Todos />
      </section>
    </Card>
  );
};

export default Home;
