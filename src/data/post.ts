type MarkdownInstance = import('astro').MarkdownInstance<any>

import type { CollectionEntry } from 'astro:content'

const { MODE } = import.meta.env


// export function single(post: MarkdownInstance): Post {
//     const slug = post.file.split("/").reverse()[0].replace(/.md|.mdx/, '')
//     return {
//         ...post.frontmatter,
//         Content: post.Content,
//         slug,
//         draft: post.file.split("/").reverse()[1] === 'drafts',
//         timestamp: (new Date(post.frontmatter.date)).valueOf()
//     }
// }

// export function publish(posts: MarkdownInstance[]): Post[] {
//     return posts
//         .filter(post => post.frontmatter.title)
//         .map(post => single(post))
//         .filter(post => MODE === 'development' || !post.draft)
//         .sort((a,b)=>b.timestamp-a.timestamp)
// }


// export function getCategorys<T extends "drafts" | "blog">(posts:CollectionEntry<T>[]):string[]{
//     let tags = [...new Set(posts.map((post) =>post.data.tag).flat())];
//     return tags
// }



