import React from "react";
export const Pagination=({items=[], itemPerPage, children})=>{
    const lastPageContentLength=items.length % itemPerPage
    const pagesCount=(items.length - lastPageContentLength) / itemPerPage;
    const getPagesItemlength=()=>{
        let pagesContentLength=Array.from(new Array(pagesCount).fill(itemPerPage))
        if(lastPageContentLength){
            pagesContentLength.push(lastPageContentLength)
        }
        return pagesContentLength;
    }
    const [pagination, setPagination]=React.useState({
        currentIndex:0,
        pages:getPagesItemlength()
    })

    const next=()=>{
        setPagination(prev=>({
            ...prev,
            currentIndex: prev.currentIndex + itemPerPage
        }))
    }

    const prev=()=>{
        setPagination(prev=>({
            ...prev,
            currentIndex: prev.currentIndex - itemPerPage < 0 ? 0 :prev.currentIndex - itemPerPage
        }))
    }

    const jumpToPage=(page)=>{
        setPagination(prev=>({
            ...prev,
            currentIndex: page > pagination.pages ? prev.currentIndex : (page-1) * itemPerPage
        }))
    }
    const paginatedItems=items.slice(pagination.currentIndex, pagination.currentIndex+itemPerPage);
    const currentPageNumber=(pagination.currentIndex / itemPerPage)+1;
    const perPageContentSize=pagination.pages[pagination.currentIndex / itemPerPage];
    const paginationHandles={
        prev,
        next,
        jumpToPage
    }
    console.log(paginatedItems,currentPageNumber,perPageContentSize, pagesCount)
    return(
        <>
            {children(paginatedItems,currentPageNumber,perPageContentSize, pagesCount+1, paginationHandles)}

        </>
    )
}