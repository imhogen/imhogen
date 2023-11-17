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

export interface blogPostsProps {
  src: string;
  title: string;
  description: string;
  link: string;
}
