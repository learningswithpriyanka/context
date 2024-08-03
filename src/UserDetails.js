import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
function UserDetails() {
  const params = useParams();
  const [query, setQuery] = useSearchParams();
// useEffect(()=>{

// },[query])
  console.log(params);
  console.log(query.get("q"));
  return <button onClick={()=>setQuery({q:"122"})}>UserDetails</button>;
}

export default UserDetails;
