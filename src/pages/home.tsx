import Image from 'next/image'
import { Inter } from 'next/font/google'
import { authControllerGetSessionInfo } from '@/shared/api/generated'
import { useQuery } from '@tanstack/react-query'
import { UiButton } from '@/shared/ui/ui-button'
import { UiTextField } from '@/shared/ui/ui-text-field'
import { UiSelectField } from '@/shared/ui/ui-select-field'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {

  const { data } =  useQuery({
    queryKey: ['session'],
    queryFn: () => authControllerGetSessionInfo()
  })

  return (
    <main
      // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <h1>Work {data?.email}</h1>
      
      <UiButton variant="primary">Hey</UiButton>
      <UiButton variant="secondary">Sign Out</UiButton>
      <UiButton variant="outlined">Sign Out</UiButton>
      <UiButton disabled variant="primary">Hay</UiButton>
      <UiTextField label='Text field' inputProps={{placeholder: 'input text'}} error='error' />
      <UiSelectField className='w-60' selectProps={{name: 'select text'}} options={[{value: '1', label: 'One'}, {value: '2', label: 'Two'}]}  />
    </main>
  )
}
