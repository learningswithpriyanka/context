import React from 'react'
import { useParams } from 'react-router-dom';

function AdminUser() {
       const params = useParams();
       console.log(params);
  return (
    <div>AdminUser</div>
  )
}

export default AdminUser