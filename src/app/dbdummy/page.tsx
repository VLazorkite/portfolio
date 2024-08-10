import type { Blog, Project } from "@prisma/client";
import { createBlog } from "../../../db/create";
import { log } from "console";

const dummyBlogs = [
  {
    title: "First Blog",
    description: "This is the first blog",
    post: "Lorem ipsum dolor sit amet",
    dateMade: new Date(),
    updatedAt: [new Date()],
    comments: ["Great blog!", "Nice post!"],
  },
  {
    title: "Second Blog",
    description: "This is the second blog",
    post: "Consectetur adipiscing elit",
    dateMade: new Date(),
    updatedAt: [new Date()],
    comments: ["Awesome blog!", "Well written!"],
  },
  {
    title: "Third Blog",
    description: "This is the third blog",
    post: "Sed do eiusmod tempor incididunt",
    dateMade: new Date(),
    updatedAt: [new Date()],
    comments: ["Informative blog!", "Impressive content!"],
  },
  {
    title: "Fourth Blog",
    description: "This is the fourth blog",
    post: "Ut labore et dolore magna aliqua",
    dateMade: new Date(),
    updatedAt: [new Date()],
    comments: ["Engaging blog!", "Well done!"],
  },
];

export default async function DBD() {
  // for (let i = 0; i < dummyBlogs.length; i++) {
  //   console.log("Creating blog", dummyBlogs[i]);
  //   try {
  //     await createBlog(dummyBlogs[i]);
  //   } catch (error) {
  //     console.error("Error creating blog", error);
  //   }
  // }
  return <h1>Should be created</h1>;
}
