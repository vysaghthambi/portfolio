import Link, { LinkProps } from "next/link";

import style from "./LinkButton.module.css";

export default function LinkButton(props: LinkProps) {
  return (
    <div className={style.RedirectBtn}>
      <Link {...props}>VIEW FULL DETAILS</Link>
    </div>
  );
}
