import { getAllBlogPosts, getBlogCategories } from "@/lib/blog";
import BlogSection from "@/component/section/Blog";
import PageTransition from "@/component/common/PageTransition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Idea Journal | Tanjil Bin Mohiuddin",
  description: "Dev notes, competitive programming insights, research journey, and project logs",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = getBlogCategories();

  return (
    <div className="min-h-screen pt-20 bg-slate-950">
      <BlogSection posts={posts} categories={categories} />
    </div>
  );
}
