import React from 'react'

// components
import Wrapper from '../../components/Wrapper/Wrapper'
import Datagrid from '../../components/Datagrid/Datagrid'

const Memberships = () => {
  return (
    <Wrapper>
        <h1 className='mb-2'>memberships</h1>

        {/* pass data to the data grid */}
        {/* !! add passing props */}
        <Datagrid/>
    </Wrapper>
  )
}

export default Memberships