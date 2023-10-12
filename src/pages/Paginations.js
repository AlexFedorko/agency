import React, {useState} from 'react';
import Pagination from "components/Pagination";

function PaginationsPage () {

    const [page, setPage] = useState(1);

    return <Pagination
        total={1000}
        onChange={setPage}
        page={page}
    />
}

export default PaginationsPage;