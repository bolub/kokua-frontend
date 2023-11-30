import { getLinkPreview } from "link-preview-js";
import { useEffect, useState } from "react";

export const usePreviewImage = ({ url }: { url: string }) => {
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    const getPreviewData = async () => {
      try {
        const data = await getLinkPreview(url);
        setPreviewImage(
          // @ts-ignore
          (data?.images && data?.images[0]) || ""
        );
      } catch (error) {}
    };

    getPreviewData();
  }, [url]);

  return previewImage;
};
