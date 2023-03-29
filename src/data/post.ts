type MarkdownInstance = import('astro').MarkdownInstance<any>

const { MODE } = import.meta.env

export type Post = {
    title: string,
    slug: string,
    desc: string,
    author: string,
    timestamp: number,
    draft: boolean,
    date: string,
    file: URL,
    img: URL,
    cover:URL,
    tag: string[]
}

export function single(post: MarkdownInstance): Post {
    const slug = post.file.split("/").reverse()[0].replace(/.md|.mdx/, '')
    return {
        ...post.frontmatter,
        Content: post.Content,
        slug,
        draft: post.file.split("/").reverse()[1] === 'drafts',
        timestamp: (new Date(post.frontmatter.date)).valueOf()
    }
}

export function publish(posts: MarkdownInstance[]): Post[] {
    return posts
        .filter(post => post.frontmatter.title)
        .map(post => single(post))
        .filter(post => MODE === 'development' || !post.draft)
        .sort((a,b)=>b.timestamp-a.timestamp)
}


export function getCategorys(posts:MarkdownInstance[]):string[]{
    let tags = []
    publish(posts).map(post=>{
        if(post?.tag){
            tags = Array.from (new Set([...tags, ...post.tag]))
        }
    })
    return tags
}



// export function getCategorysByTag(tag:string):Post[]{
//     publish(posts).map(post=>{
//         if(post?.tag){
//             tags = Array.from (new Set([...tags, ...post.tag]))
//         }
//     })
//     return tags  
// }

