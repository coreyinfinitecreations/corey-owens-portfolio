import imageUrlBuilder from "@sanity/image-url";
import { getClient } from "./client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  const client = getClient();
  if (!client) return { url: () => "/projects/placeholder.svg", width: () => ({ height: () => ({ url: () => "/projects/placeholder.svg" }) }), height: () => ({ url: () => "/projects/placeholder.svg" }) } as any;
  return imageUrlBuilder(client).image(source);
}
