import { invitation } from './data/invitation'
import { Cover } from './components/Cover'
import { Greeting } from './components/Greeting'
import { Couple } from './components/Couple'
import { DateInfo } from './components/DateInfo'
import { Gallery } from './components/Gallery'
import { Location } from './components/Location'
import { Account } from './components/Account'
import { ShareFooter } from './components/ShareFooter'

function App() {
  return (
    <div className="min-h-screen bg-cream-deep py-0 sm:py-10">
      <div className="mx-auto min-h-svh w-full max-w-[430px] bg-cream shadow-none sm:min-h-0 sm:rounded-3xl sm:shadow-xl">
        <Cover data={invitation} />
        <Greeting data={invitation} />
        <Couple data={invitation} />
        <DateInfo data={invitation} />
        <Gallery />
        <Location data={invitation} />
        <Account data={invitation} />
        <ShareFooter data={invitation} />
      </div>
    </div>
  )
}

export default App
