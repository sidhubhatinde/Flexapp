import React from 'react'
import { useParams } from 'react-router-dom'

function JobProposal() {
  const {id} = useParams();

  return (
    <div>JobProposal {id}</div>
  )
}

export default JobProposal