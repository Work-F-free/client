import { Container } from '@/components/container';
import { Banner } from '@/components/banner';
import { Recommendation } from '@/components/recommendation/recommendation';
import { OftenSearched } from '@/components/often-searched/often-searched';
import { InfoBlock } from '@/components/info-block/info-block';
import { CoworkingMap } from '@/feature/map';
import { generateCoordinates } from '@/moki/generate-coordinates';

const Landing = () => { 
  const coordinates = Array(10).fill(null).map(generateCoordinates);
  return (
    <Container variant={'default'}>
      <Banner />
      <OftenSearched className='my-6'/>
      <Recommendation className='bg-blue-50 pt-6 pb-8 rounded-lg mb-12'/>
      <CoworkingMap className='mb-12' geometrylist={coordinates} />
      <InfoBlock className='bg-pink-50 p-6 pt-6 pb-8 rounded-lg mb-12'/>
    </Container>
  );
};

export default Landing;
