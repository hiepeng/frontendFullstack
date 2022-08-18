import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux'
import { getMusic } from '../redux/music/action'
import reducer from '../redux/music/reducer'

export default function Music() {
  const result = useAppSelector((state) => state.music)
  console.log(result.name)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getMusic())
  },[])
  return (
    <div>
      
    </div>
  )
}
