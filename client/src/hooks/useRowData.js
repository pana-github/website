import { useState, useEffect } from "react";
import axios from "axios";

export function useRowData(id) {
  const [rowData, setRowData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://10.190.114.40:3001/api/edit/${decodeURIComponent(id)}`
        );
        const responseData = response.data;
        setRowData(responseData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  return { rowData };
}
