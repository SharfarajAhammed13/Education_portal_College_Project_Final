import React from 'react'
import StudentHeader from "../components/student/StudentHeader"

import StudentSidebar from "../components/student/StudentSidebar"
import Navbar from './Navbar'
export default function StudentProfile() {
  return (
    <div>
      {/* <Navbar disabled={true} /> */}
     <StudentHeader/>
     <StudentSidebar/>
    </div>
  )
}
