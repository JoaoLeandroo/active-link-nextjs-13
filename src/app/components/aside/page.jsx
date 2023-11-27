import Link from "next/link";
import ActiveLink from "../active-link/page";

export default function Aside() {
    return(
        <aside className="h-full bg-green-600 w-[300px]">
          <ul className="h-full w-full flex flex-col gap-3 p-3">
            <li className="w-full h-8 bg-green-300 rounded-md flex items-center justify-center text-center">
              <ActiveLink name={'Home'} href={'/'}></ActiveLink>
            </li>
            <li className="w-full h-8 bg-green-300 rounded-md flex items-center justify-center text-center">
              <ActiveLink name={'Suporte'} href={'/pages/suporte'}></ActiveLink>
            </li>
            <li className="w-full h-8 bg-green-300 rounded-md flex items-center justify-center text-center">
              <ActiveLink name={'Contato'} href={'/pages/contato'}></ActiveLink>
            </li>
          </ul>
        </aside>
    )
}