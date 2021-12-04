import React from 'react'
import useSWR from 'swr'
import styled from 'styled-components'
import fetcher from '../../services/fetcher'

const AvatarImage = styled.img`
  width: 100%;
`

function Avatar({ text, className }) {
  const { data, error } = useSWR(`http://localhost:5000/?text=${text}`, fetcher)

  if (!data || error) return null

  return <AvatarImage className={className} src={data?.image} alt={text} />
}

export default Avatar
