import { client } from "../../sanity/lib/client";

export const baseUrl = `${process.env.PROTOCOL}://${process.env.VERCEL_URL}`;

export type Framework = {
  _id: string;
  name: string;
};

export type Language = {
  _id: string;
  name: string;
};

export const getFramework = async (): Promise<Framework[]> => {
  const query = `
      *[_type == "framework"]{
        _id,
        'name': name -> name,
      }
    `;

  return client.fetch(query);
};

export const getLanguages = async (): Promise<Language[]> => {
  const query = `
      *[_type == "language"]{
        _id,
        'name': name -> name,
      }
    `;

  return client.fetch(query);
};
