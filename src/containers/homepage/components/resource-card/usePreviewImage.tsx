import { useEffect, useState } from "react";
import axios from "axios";

export const usePreviewImage = ({ url }: { url: string }) => {
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    const getPreviewData = async () => {
      const response = await axios.get(
        `https://www.kokua.wiki/api/og-image?url=${url}`
      );

      setPreviewImage(response.data.absoluteOgImageUrl);
    };

    getPreviewData();
  }, [url]);

  return previewImage;
};
