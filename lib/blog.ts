import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export interface BlogMetadata {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
}

export function getAllBlogPosts(): BlogMetadata[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        category: data.category,
        tags: data.tags || [],
        excerpt: data.excerpt,
      } as BlogMetadata;
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title,
      date: data.date,
      category: data.category,
      tags: data.tags || [],
      excerpt: data.excerpt,
      content: contentHtml,
    };
  } catch (error) {
    return null;
  }
}

export function getBlogPostsByCategory(category: string): BlogMetadata[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter((post) => post.category === category);
}

export function getBlogCategories(): string[] {
  const allPosts = getAllBlogPosts();
  const categories = new Set(allPosts.map((post) => post.category));
  return Array.from(categories);
}

export function getAllTags(): string[] {
  const allPosts = getAllBlogPosts();
  const tags = new Set(allPosts.flatMap((post) => post.tags));
  return Array.from(tags);
}
