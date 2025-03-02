"use client"

import { Pagination as Pag } from "@heroui/react";

export default function Pagination() {
  return <Pag showControls initialPage={1} total={10} size="lg"/>;
}
