import { Button } from "antd";

const Edit = ({ editPost, deletePost }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "6rem" }}>
      <Button
        style={{
          marginBottom: ".25rem",
          backgroundColor: "rgb(53, 108, 180)",
        }}
        type="primary"
        onClick={editPost}
      >
        Edit
      </Button>
      <Button
        type="danger"
        style={{
          marginBottom: ".25rem",
          backgroundColor: "#E74421",
        }}
        onClick={deletePost}
      >
        Delete
      </Button>
    </div>
  );
};

export default Edit;
