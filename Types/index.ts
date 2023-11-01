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
