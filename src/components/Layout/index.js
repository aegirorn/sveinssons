import React from "react"
import Navbar from "../Navbar/index"
import "../../styles/global.css"

import * as styles from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <footer>
        <p>Copyright 2021 Web Warrior</p>
      </footer>
    </div>
  )
}
