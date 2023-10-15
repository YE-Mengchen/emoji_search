import emojiList from "./emojiList.json";

function Filter(searchText, maxResults){
    return emojiList.filter((emoji) =>{
        if(
            emoji.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
            )
        {
            return true;
        }
        return false;
    
    }).slice(0, maxResults);
}
export default Filter;