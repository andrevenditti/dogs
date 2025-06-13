import React from 'react'
import { UserHeader } from './Components/UserHeader'
import { Outlet, Routes, Route } from 'react-router-dom'
import { UserContext } from '../../Contexts/UserContext'
import { Feed } from '../../Components/Feed/Feed'
import { UserPhotoPost } from './Components/UserPhotoPost'
import { UserStats } from './Components/UserStats'

export const User = () => {
  const { data } = React.useContext(UserContext)

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route index element={<Feed user={data.id} />} />
        <Route path="stats" element={<UserStats />} />
        <Route path="post" element={<UserPhotoPost />} />
      </Routes>
      {/* <Outlet /> */}
    </section>
  )
}
