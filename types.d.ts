interface Project {
  id?: string;
  title: string;
  imgUrl?: string;
  description: string;
  technology: string[];
  githubLink: string;
}

interface Blog {
  id?: string;
  title: string;
  imgUrl?: string;
  description: string;
  post: string;
  dateMade: Date;
  updatedAt: Date[];
  comments: string[];
}
