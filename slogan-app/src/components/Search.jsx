const Search = () => {
    return (
        <form className = "search_form">
            <input className = "search" onChange = {(e) => localStorage.setItem('search', e.target.value)} type="text" name="search" id="search" placeholder='Search'/>
        </form>
        )
}
export default Search;