import qs from "query-string";
import { RemixImageError } from "../types/error";
import type { TransformOptions } from "../types/image";

export const decodeQuery = (
  queryParams: URLSearchParams,
  key: string
): string | null =>
  queryParams.has(key) ? decodeURIComponent(queryParams.get(key)!) : null;

export const encodeTransformQuery = (query: TransformOptions): string =>
  qs.stringify(query, {
    skipNull: true,
    arrayFormat: "bracket",
  });

export const decodeTransformQuery = (
  queryString: string
): Partial<TransformOptions> =>
  qs.parse(queryString, {
    arrayFormat: "bracket",
    parseNumbers: true,
    parseBooleans: true,
  });

export const parseURL = (rawUrl: string, baseUrl?: URL | string): URL => {
  let urlObject: URL;

  try {
    urlObject = new URL(rawUrl, baseUrl);
  } catch (error) {
    throw new RemixImageError(`Invalid URL: ${rawUrl}`, 400);
  }

  return urlObject;
};
