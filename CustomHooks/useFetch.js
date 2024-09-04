import React from "react";

const useFetch = (url) => {
    const [apiData, setApiData] = React.useState({
        loading: true,
        data: null,
        error: null,
    });

    React.useEffect(() => {
        const fetchData = async (url) => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Api failed to fetch");
                }
                const data = await response.json();
                setApiData({
                    loading: false,
                    data: data,
                    error: null,
                });
            } catch (err) {
                setApiData({
                    loading: false,
                    data: null,
                    error: err,
                });
            }
        };
        fetchData(url);
    }, [url]);

    return apiData;
};

export default useFetch;
