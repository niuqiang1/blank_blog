/*
 * @Author: niuqiang
 * @Date: 2023-03-20 17:29:07
 * @LastEditors: niuqiang
 * @LastEditTime: 2023-03-20 17:29:17
 * @FilePath: /blank_blog/src/data/profile.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by leadbank, All Rights Reserved. 
 */
import avatar from "../images/avatar.jpg"
export type Profile = {
    name: string,
    qq: string,
    wechat: string,
    mail: string,
    mobile: string,
    skill: string[],
    hobby: string[],
    avatar: string
}


const profile: Profile = {
    name: "憨夯仔",
    qq: "1228918562",
    wechat: "憨夯仔",
    mobile: "16602110112",
    mail: '1228918562@qq.com',
    skill: ["HTML", "CSS", "JS", "VUE", "..."],
    hobby: ["篮球", "科幻"],
    avatar:avatar
}

export { profile }
