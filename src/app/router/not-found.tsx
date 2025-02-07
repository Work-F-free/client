import { Container } from "@/components/container";
import { Title } from "@/components/title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container variant={'default'}>
      <div className="min-h-[80vh] flex flex-col items-center justify-center gap-4">
        <Title text={'Ошибка 404'} size="2xl" className="font-bold text-gray-300" />
        <Title text={'Страницы с таким адресом не существует'} size="lg" className="font-semibold text-gray-700" />

        <Link to="/"><Button>На главную</Button></Link>
      </div>
    </Container>
  );
};

export default NotFound;
