import { useEffect } from "react";
import { uploadImage } from "../utils/uploadImage";
import { message } from "antd";

const ImageUploaderWithPreview = ({ setImage, previewImage }) => {
  const showPreview = (event, imageUrl) => {
    var preview = document.getElementsByClassName("preview")[0];

    if (event && event.target.files.length > 0) {
      message.info("Image is uploading.");
      let src = URL.createObjectURL(event.target.files[0]);
      uploadImage(event.target.files[0]).then((res) => {
        setImage(res.data.secure_url);
        preview.style.backgroundSize = "cover";
        preview.style.backgroundImage = `url(${src})`;
        message.success("Image uploaded.");
      });
    } else {
      if (imageUrl) {
        return (preview.style.backgroundImage = `url(${imageUrl})`);
      }
      preview.style.backgroundSize = "contain";
      return (preview.style.backgroundImage =
        "url(https://www.pngall.com/wp-content/uploads/2/Upload-PNG-High-Quality-Image.png)");
    }
  };

  useEffect(() => {
    showPreview(null, previewImage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previewImage]);

  return (
    <div className="image-uplader">
      <div className="form-input">
        <div className="preview"></div>

        <label htmlFor="file-ip-1">Upload Image</label>
        <input
          type="file"
          id="file-ip-1"
          accept="image/*"
          onChange={(event) => showPreview(event)}
        />
      </div>
    </div>
  );
};

export default ImageUploaderWithPreview;
