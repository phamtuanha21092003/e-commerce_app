import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import {
  Category,
  HoverAccount,
  LinkHeader,
  TypographyHeader,
} from "./ComponentHeader"
import { useState } from "react"
import shopee from "../assets/image/shopee.png"
import { NavLink } from "react-router-dom"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

export default function Header() {
  const [email, setEmail] = useState(localStorage.getItem("email"))
  function logOut() {
    localStorage.removeItem("email")
    setEmail(null)
  }
  return (
    <Box
      component="div"
      sx={{
        position: "fixed",
        width: "100%",
        top: "0",
        zIndex: 1000,
        right: "0",
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#f15e33",
        }}
      >
        <Toolbar
          sx={{
            gap: "1.5rem",
            "@media (max-width: 450px)": { gap: ".3rem", margin: 0 },
            "@media (min-width: 0px)": {
              minHeight: 0,
            },
          }}
        >
          <TypographyHeader>Kênh người bán</TypographyHeader>
          <TypographyHeader>Trở thành người bán Shopee</TypographyHeader>
          <TypographyHeader>Tải ứng dụng</TypographyHeader>
          <TypographyHeader grow>Kết nối</TypographyHeader>
          <TypographyHeader>Thông báo</TypographyHeader>
          <TypographyHeader>Hỗ trợ</TypographyHeader>
          {email ? (
            <HoverAccount email={email} logOut={logOut} />
          ) : (
            <>
              <LinkHeader to="signin/">Đăng nhập</LinkHeader>
              <LinkHeader to="signup/">Đăng kí</LinkHeader>
            </>
          )}
        </Toolbar>
        <nav className="navigation">
          <NavLink className="index_nav" to="">
            <img src={shopee} alt="" />
          </NavLink>
          <div className="header_grow">
            <input type="text" />
            <Category />
          </div>
          <NavLink className="cart_nav" to="/cart">
            <ShoppingCartIcon fontSize="large" sx={{ color: "white" }} />
          </NavLink>
        </nav>
      </AppBar>
    </Box>
  )
}
