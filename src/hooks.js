import React, {useState} from "react";

export const usePagination = (data, cnt) => {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / cnt);

    function current() {
        const start = (currentPage - 1) * cnt;
        const end = start + cnt;
        //0 4 8 
        return data.slice(start, end);
    }
    function jump(page) {
        setCurrentPage(page);
    }

    return {currentPage, maxPage, current, jump};
}