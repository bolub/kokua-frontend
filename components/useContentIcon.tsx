import { Box } from '@chakra-ui/react';
import React from 'react';

export default function useContentIcon(contentType) {
  return (
    <Box>
      {contentType === 'video' ? (
        <svg
          width='18'
          height='14'
          viewBox='0 0 18 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12.125 5.75L16.0581 1.81694C16.4518 1.42321 17.125 1.70207 17.125 2.25888V11.7411C17.125 12.2979 16.4518 12.5768 16.0581 12.1831L12.125 8.25M2.75 12.625H10.25C11.2855 12.625 12.125 11.7855 12.125 10.75V3.25C12.125 2.21447 11.2855 1.375 10.25 1.375H2.75C1.71447 1.375 0.875 2.21447 0.875 3.25V10.75C0.875 11.7855 1.71447 12.625 2.75 12.625Z'
            stroke='#0018E7'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      ) : contentType === 'audio' ? (
        <svg
          width='12'
          height='20'
          viewBox='0 0 12 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6 15.625C8.76142 15.625 11 13.3864 11 10.625V9.375M6 15.625C3.23858 15.625 1 13.3864 1 10.625V9.375M6 15.625V18.75M2.875 18.75H9.125M6 13.125C4.61929 13.125 3.5 12.0057 3.5 10.625V3.75C3.5 2.36929 4.61929 1.25 6 1.25C7.38071 1.25 8.5 2.36929 8.5 3.75V10.625C8.5 12.0057 7.38071 13.125 6 13.125Z'
            stroke='#0018E7'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      ) : contentType === 'code' ? (
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.875 6.125L11.75 8L9.875 9.875M6.125 9.875L4.25 8L6.125 6.125M3 14.875H13C14.0355 14.875 14.875 14.0355 14.875 13V3C14.875 1.96447 14.0355 1.125 13 1.125H3C1.96447 1.125 1.125 1.96447 1.125 3V13C1.125 14.0355 1.96447 14.875 3 14.875Z'
            stroke='#0018E7'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      ) : contentType === 'file' ? (
        <svg
          width='14'
          height='18'
          viewBox='0 0 14 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13.25 10.875V8.6875C13.25 7.1342 11.9908 5.875 10.4375 5.875H9.1875C8.66973 5.875 8.25 5.45527 8.25 4.9375V3.6875C8.25 2.1342 6.9908 0.875 5.4375 0.875H3.875M3.875 11.5H10.125M3.875 14H7M5.75 0.875H1.6875C1.16973 0.875 0.75 1.29473 0.75 1.8125V16.1875C0.75 16.7053 1.16973 17.125 1.6875 17.125H12.3125C12.8303 17.125 13.25 16.7053 13.25 16.1875V8.375C13.25 4.23286 9.89214 0.875 5.75 0.875Z'
            stroke='#0018E7'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='#0018E7'
          width='18'
          height='18'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
          />
        </svg>
      )}
    </Box>
  );
}
