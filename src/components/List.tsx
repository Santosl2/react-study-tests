import { useState } from "react";

type ListProps = {
  initialItems: string[];
};

function List({ initialItems }: ListProps) {
  const [list, setList] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  function removeFromList(item: string) {
    setTimeout(() => {
      setList((state) => state.filter((i) => i !== item));
    });
  }

  function addToList() {
    setTimeout(() => {
      setList((state) => [...state, newItem]);
    }, 500);
  }

  return (
    <>
      <input
        placeholder="Add New Item"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addToList}>Add</button>
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}

            <button onClick={() => removeFromList(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
