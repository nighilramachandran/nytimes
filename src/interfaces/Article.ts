interface MediaMetadata {
  url: string;
  format: string;
  height: number;
  width: number;
}

interface Media {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  media_metadata: MediaMetadata[];
}

interface ArticleResult {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string | null;
  nytdsection: string;
  adx_keywords: string;
  column: string | null;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media: Media[];
  eta_id: number;
}

export interface ArticleApiResponse {
  status: string;
  copyright: string;
  num_results: number;
  results: ArticleResult[];
}
