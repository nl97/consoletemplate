'use client'
import type { FC } from 'react'
import classNames from '@/utils/classnames'
import { useSelector } from '@/context/app-context'
import Image from 'next/image'
import ImageList from '../image-uploader/image-list'

type LogoSiteProps = {
  className?: string
}

const LogoSite: FC<LogoSiteProps> = ({
  className,
}) => {
  return (
    <ImageList
      src="https://console.mind-verse.de/logo/logo-site.png"
      alt="Logo"
      width={120}
      height={30}
      className={className}
      priority
    />
  )
}

export default LogoSite
