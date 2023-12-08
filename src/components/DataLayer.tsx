import React, { ReactNode } from "react";
import { LayoutContainer } from "./LayoutContainer";
import { client } from "../../sanity/lib/client";

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

export const DataLayer = async ({ children }: { children: ReactNode }) => {
  const frameworks = await getFramework();
  const languages = await getLanguages();

  return (
    <>
      <LayoutContainer frameworks={frameworks} languages={languages}>
        {children}
      </LayoutContainer>
    </>
  );
};
