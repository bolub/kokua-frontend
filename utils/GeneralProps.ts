export interface CategoryInner {
  name: string;
  logo_url: string;
  logourl?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  resources?: {
    data: Resource[]
  }
}

export interface Category {
  id: number;
  attributes: CategoryInner;
}


export interface Resource {
  id: string;
  attributes: ResourceAttributes
}

export interface ResourceAttributes {
  name: string;
  subtitle: string;
  type: ResourceType;
  external_url: string;
  content: string;
  content_ids?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  tags: Tags;
}

export type ResourceType = 'package' | 'course' | 'hotTo_or_blog_post';

export interface Tags {
  data: TagInner[];
}

export interface TagInner {
  id: number;
  attributes: TagAttributes;
}

export interface TagAttributes {
  name: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}


