import { getAllBlogPosts, getBlogCategories } from "@/lib/blog";
import BlogSection from "@/component/section/Blog";
import PageTransition from "@/component/common/PageTransition";
import AnimatedBackground from "@/component/common/AnimatedBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Idea Journal | Tanjil Bin Mohiuddin",
  description: "Dev notes, competitive programming insights, research journey, and project logs",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = getBlogCategories();

  return (
    <AnimatedBackground
      blobColors={["#6366f1", "#8b5cf6", "#a855f7"]}
      blobCount={4}
      animationSpeed="medium"
      bgGradient="from-black via-slate-950 to-black"
    >
      <div className="min-h-screen">
        <BlogSection posts={posts} categories={categories} />
      </div>
    </AnimatedBackground>
  );
}
