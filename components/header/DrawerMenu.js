import { Drawer } from "antd";
import Menu from "./Menu";

const DrawerMenu = ({ onClose, visible }) => {
  return (
    <Drawer width="280" placement="right" onClose={onClose} visible={visible}>
      <Menu/>
    </Drawer>
  );
};

export default DrawerMenu;
