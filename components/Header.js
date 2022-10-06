import Image from "next/image";
import HeaderItem from './HeaderItem';
import { HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline';

function Header() {
  const myLoader = () => {
    return "https://logodownload.org/wp-content/uploads/2019/09/hulu-logo-1.png"
  }

  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title='HOME' Icon={HomeIcon}/>
        <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
        <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
        <HeaderItem title='SEARCH' Icon={SearchIcon}/>
        <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
      </div>
      <Image
        loader={myLoader}
        className="object-contain"
        src="https://logodownload.org/wp-content/uploads/2019/09/hulu-logo-1.png"
        width={200}
        height={100}
        alt="Hulu logo"
      />
      
    </header>
  )
}

export default Header
