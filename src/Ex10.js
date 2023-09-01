import React, { useState } from 'react'

const Ex10 = () => {
   
        const initialData = [
          { id: 1, name: 'Apple', category: 'Fruit' },
          { id: 2, name: 'Banana', category: 'Fruit' },
          { id: 3, name: 'Carrot', category: 'Vegetable' },
          { id: 4, name: 'Orange', category: 'Fruit' },
          { id: 5, name: 'Broccoli', category: 'Vegetable' },
        ];
      
        const [data, setData] = useState(initialData);
        const [filterCategory, setFilterCategory] = useState('');
      
        const handleChange = (e) => {
          setFilterCategory(e.target.value);
        };
      
        const filteredData = data.filter((item) =>
          item.category.includes(filterCategory)
        );
  return (
    <div>
      <h2>FilteredList</h2>
      <div>
        <label>Filter by Category: </label>
        <input type="text" value={filterCategory} onChange={handleChange} placeholder="Enter category"/>
      </div>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ex10
