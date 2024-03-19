import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setTabs } from '../redux/tabs-slice';

export function Tabs() {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector(state => state.tabs.value);

  function handleToggleTab(event: React.MouseEvent<HTMLButtonElement>) {
    const { id } = (event.target as HTMLButtonElement).dataset;
    dispatch(setTabs(id));
  }

  return (
    <div className="nav nav-tabs w-100 my-5 text-uppercase">
      <button data-id="tab1" className={`nav-link fw-semibold ${activeTab === 'tab1' ? 'active' : ''}`} onClick={handleToggleTab}>
        Description
      </button>
      <button data-id="tab2" className={`nav-link fw-semibold ${activeTab === 'tab2' ? 'active' : ''}`} onClick={handleToggleTab}>
        Authors
      </button>
      <button data-id="tab3" className={`nav-link fw-semibold ${activeTab === 'tab3' ? 'active' : ''}`} onClick={handleToggleTab}>
        Reviews
      </button>
    </div>
  );
}
