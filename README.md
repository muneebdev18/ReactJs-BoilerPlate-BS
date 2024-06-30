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
<!--   // Local Stroage Admin Data
  const adminData = JSON.parse(localStorage.getItem("admin_user"));
  const isAuthenticated = !!admin ; --> it give result in true false

<!-- <Route path="/" element={<Splash />} />
<Route
path="/login"
element={
<PublicRoute
isAuthenticated={isAuthenticated}
element={<Login />}
/>
}
/>
<Route path="/signup" element={<SignUp />} />
<Route
path="/forgetpassword"
element={
<PublicRoute
isAuthenticated={isAuthenticated}
element={<ForgetPassword />}
/>
}
/>
<Route
path="/verifycode"
element={
<PublicRoute
isAuthenticated={isAuthenticated}
element={<VerificationCode />}
/>
}
/>
<Route
path="/newpassword"
element={
<PublicRoute
isAuthenticated={isAuthenticated}
element={<NewPassword />}
/>
}
/> -->
