import React, {memo} from 'react';

function Pagination(props) {
    let {total, perPage=10, page, onChange, showPage=5} = props;

    const count = Math.ceil(total / perPage);

    const arrOfPages = [];
    showPage--;
    const minShowPage = showPage/2 >> 0;
    const maxShowPage = showPage - minShowPage;
    let max = Math.min(page + minShowPage, count);
    let min = Math.max(1, page - maxShowPage);

    const maxOver = page + minShowPage - max; // 9 + 3 = 12 - 10 = 2
    const minOver = page - maxShowPage - min;

    if (maxOver > 0) {
        min -= maxOver;
        min = Math.max(1, min);
    }

    if (minOver < 0) {
        max -= minOver; // max += |minOver|
        max = Math.min(count, max);
    }

    for (let i = min; i <= max; i++) {
        arrOfPages.push(i);
    }


    const nextPage = () => {
        if (page < count) {
            onChange(page + 1);
        }
    };

    const previousPage = () => {
        if (page > 1) {
            onChange(page - 1);
        }
    };

    const lastPage = () => {
        onChange(count);
    };

    const firsPage = () => {
        onChange(1);
    }


    return (
        <div className='pagination-wrapper'>
            <button className='pagination-btn' onClick={firsPage}>
                &lt;&lt;
            </button>
            <button className='pagination-btn' onClick={previousPage}>
                &lt;
            </button>
            <ul className='pagination'>
                {arrOfPages.map((item) => (
                    <li
                        className={'pagination-link' + (page === item? ' active' : '')}
                        style={{fontSize: '25px', listStyle: 'none', cursor: 'pointer'}}
                        key={item}
                        onClick={() => onChange(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <button className='pagination-btn' onClick={nextPage}>
                &gt;
            </button>
            <button className='pagination-btn' onClick={lastPage}>
                &gt;&gt;
            </button>
        </div>
    );
}

export default memo(Pagination);
