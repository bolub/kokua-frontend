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
  _updatedAt?: Date;
};

export type Suggestion = {
  fullname: string;
  email: string;
  resource_title: string;
  resource_subtitle: string;
  resource_url: string;
  resource_tags?: Tag[];
};

export type ResourceSuggestion = Pick<Suggestion, "fullname">;

export type Resource = {
  _id: string;
  name: string;
  slug: string;
  resource_type: ResourceType;
  subtitle: string;
  content_type: ContentType;
  external_url: string;
  tags?: Tag[];
  upvotes: number;
  suggestedBy: ResourceSuggestion;
};
