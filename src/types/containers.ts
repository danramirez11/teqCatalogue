export interface ConHeader {
  name: string;
  desc: string;
  image: string;
  tags: string[];
}

export interface ConCategory {
  name: string;
  lids?: string[];
  images: string[];
}

export interface ConLine {
  id: string;
  header: ConHeader;
  categories: ConCategory[];
}
