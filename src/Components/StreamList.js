import "../CSS/StreamList.css";
import { useState, useEffect } from "react";


const StreamList = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [completed, setCompleted] = useState([]);

  // Load movies from localStorage when the component mounts
  useEffect(() => {
    const savedList = localStorage.getItem("movieList");
    if (savedList) {
      setList(JSON.parse(savedList));
    }
  }, []);

  // Save movies to localStorage whenever the list updates
  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem("movieList", JSON.stringify(list));
    }
  }, [list]);

  const handleAdd = () => {
    if (input.trim() !== "") {
      if (editIndex !== null) {
        const updatedList = [...list];
        updatedList[editIndex] = input;
        setList(updatedList);
        setEditIndex(null);
      } else {
        setList([...list, input]);
      }
      setInput("");
    }
  };

  const handleDelete = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);

    // Update localStorage after deletion
    localStorage.setItem("movieList", JSON.stringify(updatedList));
  };

  const handleEdit = (index) => {
    setInput(list[index]);
    setEditIndex(index);
  };

  const handleComplete = (index) => {
    setCompleted([...completed, list[index]]);
    handleDelete(index);
  };

  return (
    <div className="streamlist-container">
      <h1>Stream List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a movie or show"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul className="movie-list">
        {list.map((item, index) => (
          <li key={index} className="movie-item">
            {item}
            <button className="edit-button" onClick={() => handleEdit(index)} title="Edit">✏️</button>
            <button className="complete-button" onClick={() => handleComplete(index)} title="Mark As Completed">✅</button>
            <button className="delete-button" onClick={() => handleDelete(index)} title="Delete">❌</button>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default StreamList;


