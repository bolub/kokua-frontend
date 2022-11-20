import Head from 'next/head';
import React, { FC } from 'react';

const Seo: FC<{
  title?: string;
  description?: string;
}> = ({
  title = 'Kokua',
  description = 'Useful resources to help with software development',
}) => {
  return (
    <Head>
      <title>{title ? `${title} - Kokua` : `kokua`}</title>
      <meta name='description' content={description} />
    </Head>
  );
};

export default Seo;
