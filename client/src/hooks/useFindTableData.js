import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useLocalStorage } from "@uidotdev/usehooks";

const API_BASE_URL = "http://10.190.114.176:3001/api";
const rowsPerPage = 15;

export function useFindTableData({ newValues }, initialPage = 1) {
  const [data, setData] = useState([]);
  const [page, setPage] = useLocalStorage("searchPage", initialPage);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [cachedPages, setCachedPages] = useState({});

  const findDataValues = useCallback(
    async (searchParams) => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/search`, {
          params: {
            ...searchParams,
            page,
            limit: rowsPerPage,
            start: (page - 1) * rowsPerPage,
            end: page * rowsPerPage,
          },
        });

        const responseData = response.data;
        if (responseData.message === "No data matched the search criteria") {
          setData([]);
          setTotalPages(0);
        } else if (responseData.data && responseData.total > 0) {
          setData(responseData.data);
          setTotalPages(
            Math.max(1, Math.ceil(responseData.total / rowsPerPage))
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [page]
  );

  useEffect(() => {
    findDataValues(newValues);
  }, [newValues, findDataValues]);

  return { data, page, setPage, totalPages, isLoading };
}
