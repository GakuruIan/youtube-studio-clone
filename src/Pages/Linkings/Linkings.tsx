import React from 'react'

// components
import Wrapper from '../../components/Wrapper/Wrapper'
import Datagrid from '../../components/Datagrid/Datagrid'

const Linkings = () => {
  return (
    <Wrapper>
        <h1 className='mb-2'>Requests</h1>
        {/* !! add passing data props */}
        <Datagrid/>
    </Wrapper>
  )
}

export default Linkings