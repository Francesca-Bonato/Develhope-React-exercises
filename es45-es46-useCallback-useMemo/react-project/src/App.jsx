import { Counter } from "./components/Counter";
import { FilteredList } from "./components/FilteredList";

export function App() {
  const users = [
    { id: 1, name: "John", age: 18 },
    { id: 2, name: "Francis", age: 45 },
    { id: 3, name: "Mary", age: 12 },
    { id: 4, name: "Edward", age: 78 },
  ];
  
  return (
    <div>
      <Counter />
      <FilteredList list={users} />
    </div>
  );
}
