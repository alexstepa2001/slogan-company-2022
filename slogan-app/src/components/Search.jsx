const Search = (props) => {
    function searchHandle(e){
        localStorage.setItem('search', e.target.value);
        console.log(localStorage.getItem('search'));
        props.updateClaims();
    }
    return (
        <form className = "search_form">
            <input className = "search" onChange = {searchHandle} type="text" name="search" id="search" placeholder='Search'/>
        </form>
        )
}
export default Search;