import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
} from "@nextui-org/react";
import { Logo } from "./Logo";
import { ButtonBasic } from "./ButtonsAndInputs";
import { ButtonAction } from "./ButtonsAndInputs";
import { GoPencil } from "react-icons/go";
import { TbX } from "react-icons/tb";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <Navbar
      // isMenuOpen={isMenuOpen}
      // onMenuOpenChange={setIsMenuOpen}
      isBordered
      classNames={{
        base: "px-5 py-3",
        wrapper: "max-w-full jusitfy-space-between",
      }}
    >
      <NavbarContent>
        {/* <NavbarMenuToggle
          // aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        /> */}
        <NavbarBrand>
          <Link href="/">
            <Logo />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-10 text-2xl" justify="right">
        <NavbarItem isActive>
          <ButtonBasic
            color={"secondary"}
            innerText={"ホーム"}
            handleFunction={() => navigate("/", { replace: true })}
          />
        </NavbarItem>
        <NavbarItem>
          <ButtonBasic
            color={"primary"}
            innerText={"得意先コード"}
            handleFunction={() =>
              navigate("../order/得意先コード", { replace: true })
            }
          />
        </NavbarItem>
        <NavbarItem>
          <ButtonBasic
            color={"primary"}
            innerText={"新規"}
            handleFunction={() => navigate("../order/新規", { replace: true })}
          />
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarMenu className="my-10">
        <NavbarMenuItem>
          <Link color={"secondary"} className="w-full" href="/" size="lg">
            ホーム
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color={"primary"}
            className="w-full"
            href="../order/得意先コード"
            size="lg"
          >
            得意先コード
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color={"primary"}
            className="w-full"
            href="../order/新規"
            size="lg"
          >
            新規
          </Link>
        </NavbarMenuItem>
      </NavbarMenu> */}
    </Navbar>
  );
}

export const HeaderSecondary = ({
  id,
  isAbled,
  onIsAbledChange,
  isInDetails,
}) => {
  const [edit, setEdit] = React.useState("編集");
  React.useEffect(() => {
    if (id === "新規" || id === "得意先コード") {
      onIsAbledChange(false);
      setEdit("完了");
    }
  }, [id]);
  const handleAbledInputs = () => {
    const newIsAbled = !isAbled;
    onIsAbledChange(newIsAbled);
    setEdit(newIsAbled ? "編集" : "完了");
  };

  React.useEffect(() => {
    if (isAbled === false) {
      setEdit("完了");
    }
  }, [isAbled]);

  const navigate = useNavigate();

  return (
    <div className="text-center text-xl font-bold  my-12 mx-10 text-background-500 ">
      <div className="flex justify-between">
        <h1 className="text-left text-2xl font-bold">{`住所修正 ／${id}`}</h1>
        <div className="flex gap-5 w-1/2 justify-end">
          <div className="w-40">
            <ButtonAction
              innerText={edit}
              handleFunction={handleAbledInputs}
              icon={<GoPencil />}
              color={"primary"}
            />
          </div>
          <div className="w-40">
            <ButtonAction
              innerText={"戻る"}
              handleFunction={() => {
                isInDetails
                  ? navigate(`../order/${id}`, { replace: true })
                  : navigate("/");
              }}
              icon={<TbX />}
              color={"secondary"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderSecondary.propTypes = {
  id: PropTypes.string.isRequired,
  isAbled: PropTypes.bool.isRequired,
  onIsAbledChange: PropTypes.func.isRequired,
  isInDetails: PropTypes.bool.isRequired,
};
