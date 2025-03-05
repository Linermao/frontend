"use client"

import { Pagination as Pag } from "@heroui/react";

interface Props {
  currentPage: number;
  totalPages: number;
}

const handlePageChange = (page: number) => {
    window.location.href = `/blog/pages/${page}`
};

export default function Pagination({ currentPage=1, totalPages=10}: Props) {
  return <Pag showControls initialPage={currentPage} total={totalPages} size="lg" onChange={handlePageChange}/>;
}
