export type ResourceType = "package" | "course" | "tutorialOrBlogPost";
export type ContentType =
  | "video"
  | "audio"
  | "article"
  | "documentation"
  | "document";

export type Tag = {
  _id: string;
  name: string;
};

export type Resource = {
  _id: string;
  name: string;
  slug: string;
  resource_type: ResourceType;
  subtitle: string;
  content_type: ContentType;
  external_url: string;
  tags?: Tag[];
};
