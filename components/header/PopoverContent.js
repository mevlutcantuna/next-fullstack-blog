import Logout from "../../icons/logout.js";

const PopoverContent = ({logout}) => {
  return (
    <div className="popover-content">
      <button
        style={{
          display: "flex",
          background: "none",
          padding: "0.5rem",
          cursor: "pointer",
        }}
        onClick={logout}
      >
        <Logout />
        <span style={{ marginLeft: "0.5rem" }}>Logout</span>
      </button>
    </div>
  );
};

export default PopoverContent;
