import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { setTabs } from '../redux/tabs-slice'

export function Tabs() {
  const dispatch = useAppDispatch()
  const activeTab = useAppSelector(state => state.tabs.value)

  function handleToggleTab(event: React.MouseEvent<HTMLButtonElement>) {
    const { id } = event.target.dataset
    console.log(event.target)
    dispatch(setTabs(id))
  }

  return (
    <div className="nav nav-tabs w-100 my-5">
      <button data-id="tab1" className={`nav-link w-25 ${activeTab === 'tab1' ? 'active' : ''}`} onClick={handleToggleTab}>description</button>
      <button data-id="tab2" className={`nav-link w-25 ${activeTab === 'tab2' ? 'active' : ''}`} onClick={handleToggleTab}>authors</button>
      <button data-id="tab3" className={`nav-link w-25 ${activeTab === 'tab3' ? 'active' : ''}`} onClick={handleToggleTab}>reviews</button>
    </div>
  )
}
