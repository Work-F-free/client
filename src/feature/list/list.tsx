import { useState, useEffect, useCallback } from 'react';
import { CoworkingItem } from './model';
import { CoworkingCardFullWidth } from '@/components/coworking-card-full-width';
import { GroupVariants } from '@/components/group-variants';
import { Pagination } from '@/components/pagination';
import { CoworkingSearch } from '../search';
import { CoreServiceAPI, SearchCoworkingParams } from '@/config/api';
import { TSearchForm } from '../search/shema/shema-search';
import { SubmitHandler } from 'react-hook-form';

export function List() {
  const [currentPage, setCurrentPage] = useState(1);
  const [size, setSize] = useState(10);
  const availableSizes = [5, 10, 25, 50, 100];
  const [list, setList] = useState<Array<CoworkingItem>>([]);

  const getData = useCallback(async (data?: TSearchForm) => {
    try {
      const coworkingService = new CoreServiceAPI();
      let params: SearchCoworkingParams = { page: currentPage -1, size: size };

      params.capacity = data?.capacity ? Number(data.capacity) : undefined;
      params.name = data?.name?.length ? data.name : undefined;
      params.types = data?.types?.length ? [data.types] : undefined;
      params.priceFrom = data?.priceRange?.[0] ?? undefined;
      params.priceTo = data?.priceRange?.[1] ?? undefined;
      params.availableAt = data?.availableAt?.toISOString() ?? new Date().toISOString();

      const results = await coworkingService.searchCoworkings(params);
      // console.log(results);
      const response = {
        "totalElements": 25,
        "totalPages": 3,
        "size": 10,
        "content": [
          {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "name": "Coworking Space A",
            "address": "123 Main St, Anytown",
            "owner": "John Doe",
            "description": "Modern coworking space with high-speed internet.",
            "availableSeats": 10
          },
          {
            "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
            "name": "The Hub",
            "address": "456 Oak Ave, Anytown",
            "owner": "Jane Smith",
            "description": "Cozy coworking space with a community feel.",
            "availableSeats": 5
          },
          {
            "id": "f0e9d8c7-b6a5-4433-8877-665544332211",
            "name": "Creative Corner",
            "address": "789 Pine Ln, Anytown",
            "owner": "Peter Jones",
            "description": "Bright and airy coworking space ideal for creatives.",
            "availableSeats": 15
          },
          {
            "id": "d1c2b3a4-f5e6-9087-6543-210987654321",
            "name": "Workloft",
            "address": "101 Maple Dr, Anytown",
            "owner": "Sarah Williams",
            "description": "Upscale coworking space with private offices.",
            "availableSeats": 20
          },
        ],
        "number": 0,
        "sort": {
          "empty": true,
          "unsorted": true,
          "sorted": true
        },
        "numberOfElements": 0,
        "pageable": {
          "offset": 0,
          "sort": {
            "empty": true,
            "unsorted": true,
            "sorted": true
          },
          "unpaged": true,
          "paged": true,
          "pageNumber": 0,
          "pageSize": 0
        },
        "first": true,
        "last": true,
        "empty": true
      }

      setList(response.content);
    } catch (error) {
      console.error('Error searching coworking spaces:', error);
    }

  }, [currentPage, size]);


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getData();
  }, [ ]);


  const handleCoworkingSearchSubmit: SubmitHandler<TSearchForm> = (data) => {
    getData(data)
  };

  return (
    <>
      <CoworkingSearch onSubmit={handleCoworkingSearchSubmit} />
 
      <div className=" border-b border-gray-100 pb-5 mb-5">
        <Pagination
          totalItems={100}
          pageSize={size}
          currentPage={currentPage}
          onCurrentPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      <div className='flex flex-col gap-5 my-8'>
        {list.map((item) => (
          <CoworkingCardFullWidth item={item} key={item.id} />
        ))}
      </div>

      <div className="flex lg:flex-row flex-col gap-5 justify-between border-t border-gray-100 py-5 items-center">
        <Pagination
          totalItems={100}
          pageSize={size}
          currentPage={currentPage}
          onCurrentPageChange={handlePageChange}
        />
        <GroupVariants
          items={availableSizes}
          value={size}
          onClick={(value) => setSize(value)}
        />
      </div>
    </>
  );
}
