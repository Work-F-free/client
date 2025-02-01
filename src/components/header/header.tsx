import {Button} from "@/components/ui/button.tsx";
import {useDispatch} from "react-redux";
import {toggleAuthModalOpen} from "@/store";

export const Header = () => {
  const dispatch = useDispatch();


  return (
      <header>
        <span>Work for free</span>

        <Button onClick={() => dispatch(toggleAuthModalOpen())}>Войти</Button>
      </header>
  );
};