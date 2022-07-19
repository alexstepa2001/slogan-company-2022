import Page from './Page'

const TableMenu = (props) => {
    function toLeft() {
        if(parseInt(localStorage.getItem('pageset')) !== 0){
            localStorage.setItem('pageset', parseInt(localStorage.getItem('pageset')) - 10);
        }
    }
    function toRight() {
        if(parseInt(localStorage.getItem('pageset')) < parseInt(props.claim / 10) * 10){
            localStorage.setItem('pageset', parseInt(localStorage.getItem('pageset')) + 10);
        }
    }
    let pages = new Array();
    for(let i = 1; i <= props.claim / 10 + 1; i++){
        pages[i] = i;
    }
    return (
        <div className="table_menu">
            <button className="to_left" onClick = {toLeft}>
                <img src="img/left.svg" alt="" />
            </button>
            {pages.map((pages) =>  <Page page = {pages}/>)}
            <button className="to_right" onClick = {toRight}>
                <img src="img/left.svg" alt="" />
            </button>
        </div>
    )
}
export default TableMenu;


/*
            <div className="points">
                ...
            </div>
*/
