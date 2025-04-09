import Link from "next/link"
import style from "./ActiveLink.module.css"

interface props {
  path: string,
  text: string
}

export const ActiveLink = ({ path, text } : props) => {
  return (
    <Link className={style.link} href={path}>
      {text}
    </Link>
  )
}
