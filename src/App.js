import React, {useState} from "react";
import Header from "./Dashboard/Header/Header.jsx"
import SearchBar from "./Dashboard/Searchbar/SearchBar.jsx";
import EmojiResults from "./Dashboard/Emojis/EmojiResults.jsx";
import Filter from "./Dashboard/Emojis/Filter";

const App = () => {
  const [filteredEmojis, setFilteredEmojis] = useState(Filter("", 20));

  const handleChange = (event) => {
    setFilteredEmojis(Filter(event.target.value, 15));
  };

  return (
    <div>
      <Header />
      <SearchBar handleChange={handleChange}/>
      <EmojiResults emojiData={filteredEmojis}/>
    </div>
  );
}

export default App;