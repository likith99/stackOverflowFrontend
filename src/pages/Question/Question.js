import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import HomeMainbar from '../../components/HomeMain/HomeMainbar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
function Question() {
    return(<div className="home-container-1">
    <LeftSidebar/>
    <div class="home-container-2">
        <HomeMainbar/>
        <RightSidebar/>
    </div>
</div>)
}

export default Question