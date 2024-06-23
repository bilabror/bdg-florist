import Button from "../../Components/Form/Button.jsx";
import IconCircle from "../../Components/IconCircle.jsx";
import akarsIcon from "../../assets/icons/akar-icons_instagram-fill.svg"
import Input from "../../Components/Form/Input.jsx";
import Template from "../Templates/index.jsx";

function Beranda() {
  return (
    <>
      <Template>
        <h1>Beranda</h1>
          <Button>Tes Button</Button>
          <IconCircle src={akarsIcon} className="!bg-red-50"></IconCircle>
        <Input />
      </Template>
    </>
  );
}

export default Beranda;
