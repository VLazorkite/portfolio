import { prisma } from "../db";
const _ = require("lodash");

export async function findProject(id: string) {
  const project = await prisma.project.findUnique({
    where: {
      id: id,
    },
  });
  return project;
}
export async function findBlog(id: string) {
  const blog = await prisma.blog.findUnique({
    where: {
      id: id,
    },
  });

  return blog;
}

export async function findAllProjects() {
  const projects = await prisma.project.findMany();
  return projects;
}
export async function findAllBlogs() {
  const blogs = await prisma.blog.findMany();
  return blogs;
}
