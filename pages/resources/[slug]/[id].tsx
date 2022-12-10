import { chakra } from '@chakra-ui/react';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { getResource } from '../../../API/resource';
import Content from '../../../components/PackagePage/Content';
import ResourceHeader from '../../../components/ResourceHeader';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['resource', id], () => {
    return getResource(id as string);
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Package: NextPage = () => {
  const { query } = useRouter();

  const { data, status } = useQuery(
    ['resource', query?.id],
    () => {
      return getResource(query?.id as string);
    },
    {
      enabled: Boolean(query?.id),
    }
  );

  return (
    <>
      <ResourceHeader
        title={data?.attributes?.name}
        subtitle={data?.attributes?.subtitle}
        isLoaded={status === 'success'}
        href={data?.attributes?.external_url}
        tags={data?.attributes?.tags?.data}
        isPackagePage
      />

      <chakra.main>
        <Content
          data={data?.attributes?.content}
          contentIds={data?.attributes?.content_ids}
          packageUrl={data?.attributes?.external_url}
        />
      </chakra.main>
    </>
  );
};

export default Package;
