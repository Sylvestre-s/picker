import s from "./style.module.css";
import { MenuListItem } from "../MenuListItem/MenuListItem";
import { DIFFICUTLIES } from "./constant";

export function MenuList({ difficulty, onItemClick }) {
  return (
    <div className={s.container}>
      {DIFFICUTLIES.map((diff) => {
        // La possibilité de rajouter du code ici
        return (
          <MenuListItem
            onClick={onItemClick}
            difficulty={diff}
            isSelected={difficulty === diff}
          />
        );
      })}
    </div>
  );
}
