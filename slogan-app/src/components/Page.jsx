import React from 'react'


export default function Page(props) {
    function pageSet() {
        localStorage.setItem('pageset', (props.page - 1) * 10);
        props.updateClaims();
    }
    return (
        <button onClick = {pageSet} className="page_list">
            <div className="page">
                {props.page}
            </div>
        </button>
    )
}
