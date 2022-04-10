import { useEffect } from "react";

const ImageUploaderWithPreview = (setImageFile) => {
  const showPreview = (event) => {
    var preview = document.getElementsByClassName("preview")[0];

    if (event && event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      preview.style.backgroundSize = "cover";
      preview.style.backgroundImage = `url(${src})`;
    } else {
      preview.style.backgroundSize = "contain";

      return (preview.style.backgroundImage =
        "url(https://www.pngall.com/wp-content/uploads/2/Upload-PNG-High-Quality-Image.png)");
    }
  };

  useEffect(() => {
    showPreview(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
