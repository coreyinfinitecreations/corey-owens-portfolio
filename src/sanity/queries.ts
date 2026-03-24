import { getClient } from "./client";

export async function getProjects() {
  const client = getClient();
  if (!client) return [];
  return client.fetch(
    `*[_type == "project"] | order(order asc) {
      title,
      "slug": slug.current,
      description,
      longDescription,
      "projectType": projectType,
      image,
      technologies,
      features,
      liveUrl,
      repoUrl
    }`
  );
}

export async function getProjectBySlug(slug: string) {
  const client = getClient();
  if (!client) return null;
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      description,
      longDescription,
      "projectType": projectType,
      image,
      technologies,
      features,
      liveUrl,
      repoUrl
    }`,
    { slug }
  );
}

export async function getAbout() {
  const client = getClient();
  if (!client) return null;
  return client.fetch(
    `*[_type == "about"][0] {
      heading,
      whoIAm,
      whatIDo,
      stats
    }`
  );
}

export async function getSkillCategories() {
  const client = getClient();
  if (!client) return [];
  return client.fetch(
    `*[_type == "skillCategory"] | order(order asc) {
      title,
      skills
    }`
  );
}

export async function getBooks() {
  const client = getClient();
  if (!client) return [];
  return client.fetch(
    `*[_type == "book"] | order(order asc) {
      title,
      author,
      coverImage,
      status,
      review,
      rating
    }`
  );
}
