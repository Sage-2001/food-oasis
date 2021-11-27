import React, { useState, useEffect } from "react";
import * as loginsService from "../services/logins-service";

export const useLogins = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetch = React.useCallback(async () => {
    const fetchApi = async () => {
      setLoading({ loading: true });
      try {
        const logins = await loginsService.getAll();
        setData(logins);
        setLoading(false);
      } catch (err) {
        setError(err);
        console.error(err);
      }
    };
    fetchApi();
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, error, loading, refetch: fetch };
};
