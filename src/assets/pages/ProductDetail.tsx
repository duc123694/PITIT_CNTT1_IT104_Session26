import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const {id} = useParams();
  return (
    <div>
      <h1>Id = {id}</h1>
    </div>
  )
}
