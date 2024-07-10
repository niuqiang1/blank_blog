/*
 * @Author: niuqiang
 * @Date: 2023-03-20 17:29:07
 * @LastEditors: niuqiang1 1228918562@qq.com
 * @LastEditTime: 2024-07-10 17:40:23
 * @FilePath: /blank_blog/src/data/profile.ts
 * @Description:
 *
 * Copyright (c) 2023 by leadbank, All Rights Reserved.
 */
import avatar from "../images/avatar.jpg";
export type Profile = {
  name: string;
  qq: string;
  wechat: string;
  mail: string;
  mobile: string;
  skill: string[];
  hobby: string[];
  job: string;
  avatar: string;
};

const profile: Profile = {
  name: "憨夯仔",
  qq: "122****562",
  wechat: "憨夯仔",
  mobile: "166*****0112",
  mail: "122**2@qq.com",
  skill: ["HTML", "CSS", "JS", "VUE", "..."],
  hobby: ["篮球", "科幻"],
  job: "前端开发工程师",
  avatar: avatar,
};

export { profile };
