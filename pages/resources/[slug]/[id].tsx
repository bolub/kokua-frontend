import { chakra } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { getResource } from '../../../API/resource';
import Content from '../../../components/PackagePage/Content';
import ResourceHeader from '../../../components/ResourceHeader';

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
          packageUrl={data?.attributes?.external_url}
        />
      </chakra.main>
    </>
  );
};

export default Package;
