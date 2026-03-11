import { Counter } from "./Counter.jsx";
import { Header } from "./Header.jsx";
import { Info } from "./Info.jsx";
// todo-meteor\temp\react-tests\TestTask.jsx
import { TestTask } from "../../temp/react-tests/TestTask.jsx";

// tudo depois do => é o que a função retorna

//rafce cria componente rápido
export const App = () => (
  <div className="page">
    <Header />
    <main className="main">
      <Counter />
      <Info />
      <TestTask />
    </main>
  </div>
);
