export interface Tecnologia {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  name: string;
  img?: string;
  altimg?: string;
  description: string;
  tags: string;
  link: string;
  repositorio: string;
}
