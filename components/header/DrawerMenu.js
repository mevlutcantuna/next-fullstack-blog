import Menu from "./Menu";
import { Drawer } from "antd";

const DrawerMenu = ({ onClose, visible }) => {
  return (
    <Drawer width="280" placement="right" onClose={onClose} visible={visible}>
      <Menu/>
    </Drawer>
  );
};

export default DrawerMenu;
