import { useState } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, msgAtom, networkAtom, notiAtom, totalNoti } from './store/atom'
//import './App.css'

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}
function MainApp() {
  const netCount = useRecoilValue(networkAtom);
  const jobCount = useRecoilValue(jobsAtom);
  const notiCount = useRecoilValue(notiAtom);
  const msgCount = useRecoilValue(msgAtom);
  const totalNotification = useRecoilValue(totalNoti);


  return (
    <>
    <RecoilRoot>
      <button>Home</button>
      <button>My Network ( {netCount >= 100 ? "99+" : netCount} )</button>
      <button>Jobs ( {jobCount} )</button>
      <button>Message ( {msgCount >= 100 ? "99+" : msgCount} )</button>
      <button>Notification ( {notiCount >= 100 ? "99+" : notiCount} ) </button>
      <button>Me ( {totalNotification} )</button>
    </RecoilRoot>
    </>
  )
}
export default App
