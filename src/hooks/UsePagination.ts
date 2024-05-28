import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

interface IPaginationBaseState {
  itemsPerPage: number;
  activePage: string;
  keyword?: string | null;
  filter?: string | null;
  tags?: number[] | null | string;
  name?: string | null;
  type?: string;
  sort?: string;
}

const useCustomPagination = (initPage: string, initSize: number) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const [pagination, setPagination] = useState<IPaginationBaseState>({
    activePage: initPage,
    itemsPerPage: initSize,
    keyword: '',
    name: '',
    type: '',
    sort: '',
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get('page');
    const keyword = params.get('keyword');
    const filter = params.get('filter');
    const tags = params.get('tags');
    const typeSort = params.get('type');
    const sortParam = params.get('sort');

    if (page) {
      setPagination({
        ...pagination,
        activePage: page,
        keyword,
        filter,
        tags,
        type: typeSort || '',
        sort: sortParam || '',
      });
    }
    setLoading(false);
  }, [location.search]);

  const setPage = (page: string) => {
    setPagination((pre) => ({ ...pre, activePage: page }));
  };

  const setPageSize = (size: number) => {
    setPagination((pre) => ({ ...pre, itemsPerPage: size }));
  };

  const setKeyword = (keyword: string) => {
    setPagination((pre) => ({ ...pre, keyword }));
  };

  const setFilter = (filter: string) => {
    setPagination((pre) => ({ ...pre, filter }));
  };

  const setTagParams = (tags: number[]) => {
    setPagination((pre) => ({ ...pre, tags }));
  };

  const setTypeSortTagsParams = (typeSort: string) => {
    setPagination((pre) => ({ ...pre, type: typeSort }));
  };

  const setSortParams = (sort: string) => {
    setPagination((pre) => ({ ...pre, sort: sort }));
  };

  const updateUrl = (
    paginationData?: Omit<IPaginationBaseState, 'activePage' | 'itemsPerPage'>,
  ) => {
    const paging = paginationData ? { ...pagination, ...paginationData } : pagination;

    searchParams.set('page', paging.activePage);
    searchParams.set('keyword', paging.keyword || '');
    searchParams.set('type', paging.type || 'ALPHABET');
    searchParams.set('sort', paging.sort || '');

    setSearchParams(searchParams);
  };

  const addToUrl = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };

  return {
    pagination,
    setPagination,
    setPage,
    setKeyword,
    updateUrl,
    loading,
    setFilter,
    setTagParams,
    setPageSize,
    addToUrl,
    setTypeSortTagsParams,
    setSortParams,
  };
};

export default useCustomPagination;
