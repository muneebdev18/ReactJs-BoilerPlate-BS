
- Build Custom Hooks for Data Fetching


Hooks for fetching the data
- Normal Fetching GET

import {useFetch} from '../../hooks/getHook'
const { data, loading, error } = useFetch(`api_url`);

- SWR Fetching GET

import {useFetchSWR} from '../../hooks/getHook'
const { data, loading, error } = useFetchSWR(`api_url`);

- Fetch Hook SWR - Bearer Token

import useAuthorizedSWRFetch from '../../hooks/getHook';
const { data, loading, error } = useAuthorizedSWRFetch(`api_url`, token);


- Post Request 
import {usePost} from '../../hooks/usePost'
const { postData} = usePost(`api_url`);


const handleSubmit = async () => {
    try {
      const responseData = await postData(body);
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };

