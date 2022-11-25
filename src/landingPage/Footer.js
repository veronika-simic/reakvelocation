import * as React from "react"
import Avatar from "@mui/material/Avatar"

import hrvoje from "./hrvoje.jpeg"
import teodora from "./teodora.jpeg"
import veronika from "./veronika.png"
import bruno from "./bruno.jpeg"
import Box from "@mui/material/Box"
import BottomNavigation from "@mui/material/BottomNavigation"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"

import "./Footer.css"

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0)

  return (
    <Box>
      <BottomNavigation
        sx={{
          width: "100%",
          height: 70,
          bgcolor: "warning.main",
          bottom: 0,
          display: "flex",
          alignItems: "center",
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <Typography
          class="love"
          color="white"
          variant="h5"
          sx={{ marginRight: "30px" }}
        >
          Made with love by Akvelon team
        </Typography>
        <IconButton href={"https://github.com/veronika-simic"}>
          <Avatar alt="Vera" src={veronika} />
        </IconButton>

        <IconButton
          href={"https://hr.linkedin.com/in/teodora-crvelin-88691513a"}
        >
          <Avatar alt="Teic" src={teodora} />
        </IconButton>

        <IconButton href={"https://github.com/BrunoPerkovic"}>
          <Avatar alt="Bruno" src={bruno} />
        </IconButton>

        <IconButton href={"https://github.com/Hvukov"}>
          <Avatar alt="Hrc" src={hrvoje} />
        </IconButton>
      </BottomNavigation>
    </Box>
  )
}
