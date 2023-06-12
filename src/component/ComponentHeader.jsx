import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import Button from "@mui/material/Button"
import { Menu } from "@mui/material"
import Tooltip from "@mui/material/Tooltip"
import IconButton from "@mui/material/IconButton"
import Avatar from "@mui/material/Avatar"
import MenuItem from "@mui/material/MenuItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import Divider from "@mui/material/Divider"
import Box from "@mui/material/Box"
import PersonAdd from "@mui/icons-material/PersonAdd"
import Settings from "@mui/icons-material/Settings"
import Logout from "@mui/icons-material/Logout"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateCategory } from "../features/category/categorySlice"

function TypographyHeader({ children, grow }) {
      const css = {
            fontSize: ".7rem",
            "@media (max-width: 450px)": {
                  textDecoration: "none",
                  margin: "0px",
                  fontSize: ".3rem",
                  fontWeight: 10,
                  padding: "0.25rem",
                  position: "relative",
                  outline: 0,
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
            },
      }
      if (grow) css.flexGrow = 1
      return (
            <Typography variant="div" sx={css}>
                  {children}
            </Typography>
      )
}

function LinkHeader({ to, children }) {
      return (
            <Button
                  component={Link}
                  to={to}
                  color="inherit"
                  sx={{
                        fontSize: ".5srem",
                        padding: 0,
                        "@media (max-width: 450px)": {
                              minWidth: 0,
                              fontSize: ".3rem",
                        },
                  }}
            >
                  {children}
            </Button>
      )
}

function HoverAccount({ email, logOut }) {
      const [anchorEl, setAnchorEl] = useState(null)
      const open = Boolean(anchorEl)
      const handleClick = (event) => {
            setAnchorEl(event.currentTarget)
      }
      const handleClose = () => {
            setAnchorEl(null)
      }
      return (
            <>
                  <Box
                        sx={{
                              display: "flex",
                              alignItems: "center",
                              textAlign: "center",
                        }}
                  >
                        <Tooltip title="Account settings">
                              <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={
                                          open ? "account-menu" : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                              >
                                    <Avatar sx={{ width: 32, height: 32 }}>
                                          {email[0]}
                                    </Avatar>
                              </IconButton>
                        </Tooltip>
                  </Box>
                  <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                              elevation: 0,
                              sx: {
                                    overflow: "visible",
                                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                    mt: 1.5,
                                    "& .MuiAvatar-root": {
                                          width: 32,
                                          height: 32,
                                          ml: -0.5,
                                          mr: 1,
                                    },
                                    "&:before": {
                                          content: '""',
                                          display: "block",
                                          position: "absolute",
                                          top: 0,
                                          right: 14,
                                          width: 10,
                                          height: 10,
                                          bgcolor: "background.paper",
                                          transform:
                                                "translateY(-50%) rotate(45deg)",
                                          zIndex: 0,
                                    },
                              },
                        }}
                        transformOrigin={{
                              horizontal: "right",
                              vertical: "top",
                        }}
                        anchorOrigin={{
                              horizontal: "right",
                              vertical: "bottom",
                        }}
                  >
                        <MenuItem onClick={handleClose}>
                              <Avatar /> {email}
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                              <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                              </ListItemIcon>
                              Add another account
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                              <ListItemIcon>
                                    <Settings fontSize="small" />
                              </ListItemIcon>
                              Settings
                        </MenuItem>
                        <MenuItem onClick={logOut}>
                              <ListItemIcon>
                                    <Logout fontSize="small" />
                              </ListItemIcon>
                              Logout
                        </MenuItem>
                  </Menu>
            </>
      )
}

function Category() {
      const dispath = useDispatch()
      function handleOnclick(update) {
            dispath(updateCategory({ update }))
      }
      return (
            <div className="category_header">
                  <div
                        className="category_item"
                        onClick={() => handleOnclick("laptops")}
                  >
                        Laptop
                  </div>
                  <div
                        className="category_item"
                        onClick={() => handleOnclick("smartphones")}
                  >
                        Smart phone
                  </div>
                  <div
                        className="category_item"
                        onClick={() => handleOnclick("skincare")}
                  >
                        Mĩ phẩm
                  </div>
                  <div
                        className="category_item"
                        onClick={() => handleOnclick("home-decoration")}
                  >
                        Đồ trang chí
                  </div>
            </div>
      )
}

export { TypographyHeader, LinkHeader, HoverAccount, Category }
