import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/utils/api";

export const usePreviewImage = ({ url }: { url: string }) => {
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    const getPreviewData = async () => {
      const response = await axios.get(`${baseUrl}/api/og-image?url=${url}`);

      setPreviewImage(response.data.absoluteOgImageUrl);
    };

    getPreviewData();
  }, [url]);

  return previewImage;
};
