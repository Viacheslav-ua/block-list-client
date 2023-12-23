import Image from 'next/image';
import { Inter } from 'next/font/google';
import { authControllerGetSessionInfo } from '@/shared/api/generated';
import { useQuery } from '@tanstack/react-query';
import { UiButton } from '@/shared/ui/ui-button';
import { UiTextField } from '@/shared/ui/ui-text-field';
import { UiSelectField } from '@/shared/ui/ui-select-field';
import { UiLink } from '@/shared/ui/ui-link';
import { UiSpinner } from '@/shared/ui/ui-spinner';
import { UiPageSpinner } from '@/shared/ui/ui-page-spinner';
import { UiLogo } from '@/shared/ui/ui-logo';
import { UiHeader } from '@/shared/ui/ui-header';
import { SignOutButton } from '@/features/auth';
import { useSessionQuery } from '@/entities/session';

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {

  const { data } =  useSessionQuery()
  //   queryKey: ['session'],
  //   queryFn: () => authControllerGetSessionInfo(),
  //   staleTime: 5*60*1000,

  // })

  return (

    <>
    <UiHeader className='' right={<div className="flex items-center"><span className='mr-8'>{data?.email}</span><SignOutButton /></div> } />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <UiButton variant="primary">Hey</UiButton>
      <UiButton variant="secondary">Sign Out</UiButton>
      <UiButton variant="outlined">Sign Out</UiButton>
      <UiButton disabled variant="primary">Hay</UiButton>
      <UiTextField label='Text field' inputProps={{placeholder: 'input text'}} error='error' />
      <UiSelectField className='w-60' selectProps={{name: 'select text'}} options={[{value: '1', label: 'One'},     {value: '2', label: 'Two'}]}  />

      <UiLink href={'/'}>Q2EEWGTwaefg</UiLink>
      <UiSpinner className='text-teal-600 h-20 w-20' />
      {/* <UiPageSpinner /> */}
      {/* <UiLogo className='text-teal-900 font-bold text-sm italic' /> */}
    </main>
    </>
  )
}
