import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React from "react";
import { useSearchParams } from "react-router";

function Pagination({ itemCount, pageSize, currentPage }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageCount = Math.ceil(itemCount / pageSize);

  const changePage = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    setSearchParams(params);
  };

  return (
    <div className="border border-black flex items-center w-min rounded">
      <button
        className="py-1 md:py-2 px-1 hover:bg-gray-400 rounded disabled:text-gray-400"
        disabled={currentPage === 1}
        onClick={() => changePage(1)}
      >
        <ChevronFirst />
      </button>
      <button
        className="py-1 md:py-2 px-1 hover:bg-gray-400 rounded disabled:text-gray-400"
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
      >
        <ChevronLeft />
      </button>
      <button
        className="py-1 md:py-2 px-1 hover:bg-gray-400 rounded disabled:text-gray-400"
        disabled={currentPage === pageCount}
        onClick={() => changePage(currentPage + 1)}
      >
        <ChevronRight />
      </button>
      <button
        className="py-1 md:py-2 px-1 hover:bg-gray-400 rounded disabled:text-gray-400"
        disabled={currentPage === pageCount}
        onClick={() => changePage(pageCount)}
      >
        <ChevronLast />
      </button>
    </div>
  );
}

export default Pagination;
