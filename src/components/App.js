import ReviewList from './ReviewList';
import mockItems from '../mock.json';
import { useState } from 'react';

function App() {
  const [order, setOrder] = useState('createdAt');
  const [items, setItems] = useState(mockItems);

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder('createdAt');
  const handleRatingClick = () => setOrder('rating');

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleRatingClick}>별점순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
