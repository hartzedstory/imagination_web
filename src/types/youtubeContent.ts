export interface YouTubeVideoResponse {
  items: YouTubeVideoItem[];
}

export interface YouTubeVideoItem {
  id: string;
  snippet: Snippet;
  statistics: Statistics;
  contentDetails: ContentDetails;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags?: string[];
}

export interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
  standard?: Thumbnail;
  maxres?: Thumbnail;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Statistics {
  viewCount: string;
  likeCount?: string;
  dislikeCount?: string;
  favoriteCount: string;
  commentCount?: string;
}

export interface ContentDetails {
  duration: string; // ISO 8601 format (e.g., "PT5M33S")
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  projection: string;
}
