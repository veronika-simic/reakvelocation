import * as React from "react"
import Avatar from "@mui/material/Avatar"

import hrvoje from "./hrvoje.jpeg"
import teodora from "./teodora.jpeg"
import veronika from "./veronika.png"
import bruno from "./bruno.jpeg"
import Box from "@mui/material/Box"
import BottomNavigation from "@mui/material/BottomNavigation"

import IconButton from "@mui/material/IconButton"

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0)

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        sx={{
          position: "fixed",
          bottom: 0,
          width: 1.0,
          height: 70,
          bgcolor: "warning.main",
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
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
