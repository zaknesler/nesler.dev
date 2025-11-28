import type { APIRoute } from 'astro';

export const prerender = false;

const FIELD_MAP: Record<string, string> = {
  artist: 'artistTerm',
  album: 'albumTerm',
  track: 'songTerm',
};

type Response = {
  resultCount: number;
  results: Result[];
};

type Result = {
  wrapperType: string;
  collectionType: string;
  artistId: number;
  collectionId: number;
  amgArtistId: number;
  artistName: string;
  collectionName: string;
  collectionCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  collectionExplicitness: string;
  trackCount: number;
  copyright: string;
  country: string;
  currency: string;
  releaseDate: string;
  primaryGenreName: string;
};

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);

  const query = url.searchParams.get('q') || url.searchParams.get('query');

  if (!query) return Response.json({ error: 'No query provided. (e.g. /search?q=david+bowie)' }, { status: 400 });

  const field = url.searchParams.get('f') || url.searchParams.get('field');

  if (field && !FIELD_MAP[field])
    return Response.json(
      { error: `Invalid field. Accepted values: ${Object.keys(FIELD_MAP).join(', ')}` },
      { status: 400 },
    );

  const attribute = field ? FIELD_MAP[field]! : '';

  const limit = url.searchParams.get('limit') || '50';

  const params = new URLSearchParams({
    term: query,
    country: 'US',
    media: 'music',
    entity: 'album',
    attribute,
    limit,
    explicit: 'Yes',
  });

  const res = await fetch(`https://itunes.apple.com/search?${params.toString()}`);
  const json: Response = await res.json();

  const mapped = mapResponse(json);
  return Response.json(mapped);
};

const mapResponse = (json: Response) => {
  const data = json.results.map(mapResult);
  const meta = {
    total: json.resultCount,
  };

  return { meta, data };
};

const mapResult = (result: Result) => {
  const artwork = {
    small: result.artworkUrl60,
    medium: result.artworkUrl100,
    full: result.artworkUrl100.replace('/100x100bb.', '/10000x10000.'),
  };

  return {
    artist_id: result.artistId,
    collection_id: result.artistId,
    amg_artist_id: result.amgArtistId,
    artist_name: result.artistName,
    album_name: result.collectionName,
    release_date: new Date(result.releaseDate),
    genre: result.primaryGenreName,
    track_count: result.trackCount,
    is_explicit: result.collectionExplicitness !== 'notExplicit',
    copyright: result.copyright,
    country: result.country,
    artwork,
  };
};
