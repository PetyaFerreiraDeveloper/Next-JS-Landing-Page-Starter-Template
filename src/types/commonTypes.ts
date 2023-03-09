export interface ContactType {
  name: string;
  icon?: string;
  href?: string;
  target?: string;
}

export interface PageLinkType {
  text: string;
  navigation: string;
  className?: string;
}

export interface IconType {
  fill?: string;
  width: number;
  height: number;
  className?: string;
  style?: string;
}
