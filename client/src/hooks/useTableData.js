import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useLocalStorage } from "@uidotdev/usehooks";

// const API_BASE_URL = "http://10.190.114.40:3001/api";
const ROWS_PER_PAGE = 15;

export function useTableData(initialPage = 1, baseURL) {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [page, setPage] = useLocalStorage(initialPage);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [cachedPages, setCachedPages] = useState({});

  const fetchData = useCallback(async (pageNumber) => {
    setIsLoading(true);
    const startIndex = (pageNumber - 1) * ROWS_PER_PAGE;
    const endIndex = pageNumber * ROWS_PER_PAGE;

    try {
      const response = await axios.get(`${baseURL}/data`, {
        params: { limit: ROWS_PER_PAGE, start: startIndex, end: endIndex },
      });
      const responseData = response.data;
      setCachedPages((prev) => ({
        ...prev,
        [pageNumber]: responseData.data,
      }));
      setData(responseData.data || []);
      setTotalPages(Math.ceil(responseData.total / ROWS_PER_PAGE));

      setColumns(responseData.headers);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!cachedPages[page]) {
      fetchData(page);
    } else {
      setData(cachedPages[page]);
    }
  }, [page, fetchData, cachedPages]);

  return { data, columns, page, setPage, totalPages, isLoading };
}
