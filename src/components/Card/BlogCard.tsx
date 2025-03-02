"use client"

import Image from "next/image"

import Card from "./Card"
import IconButton from "../IconButton"
import {Link, Button} from "@heroui/react";

import { d_accounts } from "@/data/blog"
import { s_aside } from "@/styles/Blog"

import avatar from "@/assets/avatar.jpg"
import github from "@/assets/icons/icon_github_white.svg"

export default function BlogCard(){
  return (
    <>
      <Card className="p-10">
        <div className="flex flex-col gap-2 justify-center items-center">
          <Image src={avatar} alt="avatar" className="w-32 h-32 rounded-full hover:rotate-180 transition-transform dark:opacity-85"/>
          <p className={s_aside.title}>Linermao</p>
          <Button
            showAnchorIcon
            as={Link}
            href="https://github.com/linermao"
            variant="solid"
            className="bg-blue-500 dark:bg-gray-600 m-2 font-bold text-white"
          >
            FOLLOW ME
          </Button>
          <div className="flex gap-5 justify-center items-center pt-2">
            {d_accounts.map((item, index)=>(
              <IconButton key={index} {...item} />
            ))}
          </div>
        </div>
        
      </Card>
    </>
  )
}
