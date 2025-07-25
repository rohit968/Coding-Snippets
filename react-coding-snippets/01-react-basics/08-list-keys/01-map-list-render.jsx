// Topic: Rendering Lists in React using map()
// Description: This snippet shows how to display an array of items in JSX using the map() method. React requires a return for every item inside map() so it knows what to render for each element.

import React from "react";

function MapListRender() {
  const fruits = ["Apple", "Banana", "Cherry", "Mango"];

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li> // key is not ideal here, but okay for static lists
        ))}
      </ul>
    </div>
  );
}

export default MapListRender;

// Fruit List ->
// • Apple
// • Banana
// • Cherry
// • Mango

//🧠 Tip: If the array is static (no dynamic reordering), using index as a key is okay. But for dynamic lists (add/remove/sort), always use a unique ID.
