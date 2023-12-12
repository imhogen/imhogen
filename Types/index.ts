export interface valueProps {
  title: string;
  description: string;
  src: string;
}

export interface clientsProps {
  src: string;
  alt: string;
}

export interface PortfolioProps {
  count: string;
  title: string;
  description: string;
  Src: string;
  alt: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

export interface HelpProps {
  customIcon: string;
  title: string;
  descriptiveText: string;
}

export interface teamProps {
  title: string;
  description: string;
  Src: string;
  alt: string;
}

export interface navLinkProps {
  link: string;
  href: string;
}

// //this particular interface was for the dummy data and would be taken off soon

export interface SocialMediaProps {
  link: string;
  path: string;
  linkrect: boolean;
  linkcircle: boolean;
  instarect: boolean;
  instaline: boolean;
}

export interface BlogPost {
  title: string;
  overview: string;
  image: string;
  author: string;
  content: any;
  _id: string;
  slug: {
    current: string;
  };
  _createdAt: string;
  imageUrl: string;
}
