import React from 'react'
import Pages from './Pages'
import dashboard from '../Static/Icon/dashboard.png'
import badges from '../Static/Icon/badges.png'
import store from '../Static/Icon/game store.png'
import library from '../Static/Icon/library.png'
import stream from '../Static/Icon/live stream.png'
import thropies from '../Static/Icon/thropies.png'
import team from '../Static/Icon/team member.png'



function PagesList() {
  return (
    <div className="page-list">
        <Pages icon = {dashboard} page = {'page-active'} pageText = {'page-text-active'} name = {'Dashboard'} alert = {0}/>
        <Pages icon= {store} page = {'page-unactive'} pageText = {'page-text-unactive'} name = {'Game Store'} alert = {0}/>
        <Pages icon= {stream} page = {'page-unactive'} pageText = {'page-text-unactive'} name = {'Live Stream TV'} alert = {0}/>
        <Pages icon= {team} page = {'page-unactive'} pageText = {'page-text-unactive'} name = {'Teams Member'} alert = {0}/>
        <Pages icon= {badges} page = {'page-unactive'} pageText = {'page-text-unactive'} name = {'Badges'} alert = {0}/>
        <Pages icon= {library} page = {'page-unactive'} pageText = {'page-text-unactive'} name = {'My Library'} alert = {2}/>
        <Pages icon= {thropies} page = {'page-unactive'} pageText = {'page-text-unactive'} name = {'Thropies'} alert = {7}/>
    </div>
  )
}

export default PagesList