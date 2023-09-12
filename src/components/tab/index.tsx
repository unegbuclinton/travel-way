'use client'
import React, { ReactNode } from 'react'

interface tabProp {
  tabs: Array<{ title: ReactNode; component: ReactNode }>
  titleColor?: string
  tabStyle?: string
}
const Tab: React.FC<tabProp> = ({ tabs, titleColor, tabStyle }) => {
  const [activeTab, setActiveTab] = React.useState(0)
  return (
    <div className=''>
      <div
        className={`${
          tabStyle ? tabStyle : ''
        } overflow-x-scroll lg:overflow-visible flex mb-5 border-grey mr-5 pb-3`}
      >
        {tabs?.map((tab, index) => (
          <div key={index}>
            <button
              className={`pb-1 mr-8 ${
                titleColor ? titleColor : 'text-white'
              }  ${activeTab === index ? 'border-b button-transition' : ''} `}
              onClick={() => {
                setActiveTab(index)
              }}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>

      <div className='tab-content'>
        <div className='component-transition'>
          {tabs && tabs[activeTab] && tabs[activeTab]?.component}
        </div>
      </div>
    </div>
  )
}

export default Tab
