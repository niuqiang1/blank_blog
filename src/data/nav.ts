/*
 * @Author: niuqiang
 * @Date: 2023-03-20 17:28:55
 * @LastEditors: niuqiang
 * @LastEditTime: 2023-03-24 14:15:40
 * @FilePath: /blank_blog/src/data/nav.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by leadbank, All Rights Reserved. 
 */
export type NavItem = {
    title:string,
    slug: string,
    isPage?: boolean
  }
  
  export const nav: NavItem[] = [
    {
      title: '首页',
      slug: '/',
    },
    {
      title: '博客',
      slug: '/blog',
      isPage:true
    },
    {
      title: '分类',
      slug: '/category'
    }
  ]