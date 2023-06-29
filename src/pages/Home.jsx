import Input from "../components/Input";
import TodoList from "../components/TodoList";

function Home() {

  return (
    <>
      <Input/>
      <main>
        <TodoList isDone={false}/>
        <TodoList isDone={true}/>
      </main>
    </>
  );
}

export default Home;
