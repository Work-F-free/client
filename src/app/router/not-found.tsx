import { Container } from "@/components/container";
import { Title } from "@/components/title";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Container variant={'default'}>
      <div className="min-h-[65vh] flex flex-col items-center justify-center gap-4">
        <Title text={'Ошибка 404'} size="2xl" className="font-bold text-gray-300" />
        <Title text={'Страницы с таким адресом не существует'} size="lg" className="font-semibold text-gray-700" />

        <Button>На главную</Button>
      </div>
    </Container>
  );
};

export default NotFound;
