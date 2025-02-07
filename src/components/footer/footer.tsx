import { Link } from "react-router-dom";
import { Container } from "../container";

export const Footer = () => {
  return (
    <footer>
      <Container variant={'default'}>
        <div className='grid md:grid-cols-2 gap-4 mb-6 '>
          <div className="text-gray-500">
            <h3 className="text-[14px] font-semibold mb-5">Контакты</h3>
            <ul>
              <li className="mb-4">
                <a href="tel:8888888888" className="text-[18px]"> +7 (800) 880-88-80 </a>
                <span className="text-[12px] font-light ">
                  <p>Горячая линия</p>
                  <p>9:00-21:00 МСК</p>
                </span>
              </li>
              <li>
                <a href="mailto:info@koworka.co" className="text-[13px] font-light" >info@koworka.co</a>
              </li>
            </ul>
          </div>

          <div className="text-gray-500">
            <h3 className="text-[14px] font-semibold mb-5">Резидентам</h3>
            <ul>
              <li className="text-[13px] font-light mb-4">
                Личный кабинет
              </li>
              <li className="text-[13px] font-light mb-4">
                Документы
              </li>
              <li className="text-[13px] font-light mb-4">
                Вопросы и ответы
              </li>
            </ul>
          </div>

        </div>
        <div className="text-[10px] text-gray-400 flex justify-between gap-4 pt-3 pb-8">
          <span>© 2025, koworka. Все права защищены.</span>
          <div className="flex gap-4" >
            <Link to="/polici">Политика конфиденциальности</Link>
            <Link to="/oferta">Договор оферты</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
