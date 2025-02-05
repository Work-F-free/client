import { Button } from "@/components/ui/button.tsx";
import { useDispatch } from "react-redux";
import { toggleAuthModalOpen } from "@/store";
import { Container } from "../container";
import { Title } from "../title";
import { User } from "lucide-react";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="sticky top-0 z-10 border-b bottom-6 border-gray-950/5">
      <div className="relative h-14 bg-cover">
        <div className="absolute inset-0 backdrop-blur-md filter"> </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Container variant={'default'}>
            <div className="flex justify-between items-center">
              <Title text={'WorkForFree'} size="md" className="font-bold text-gray-700" />
              <div>
                <Button className="h-14 rounded-none hover:bg-black/5" variant="ghost" onClick={() => dispatch(toggleAuthModalOpen())}>
                  <User /> Личный кабинет
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
};
