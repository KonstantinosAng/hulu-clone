import Image from 'next/image';
import HeaderItem from './HeaderItem';
import { HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline';

function Header() {
  return (
    <header className="flex">
      <div>
        <HeaderItem title='HOME' Icon={HomeIcon}/>
      </div>
      <Image 
      className="object-contain"
      src="/../public/logo.png"
      width={200}
      height={100}
      />
      
    </header>
  )
}

export default Header
