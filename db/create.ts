import { prisma } from "../db";

export async function createProject(project: Project) {
  await prisma.project.create({
    data: project,
  });
}
export async function createBlog(blog: Blog) {
  try {
    await prisma.blog.create({
      data: blog,
    });
  } catch (error) {
    console.error("Error creating blog", error);
  }
}
