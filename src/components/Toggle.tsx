import { Switch } from '@headlessui/react'
import clsx from 'clsx'

interface ToggleProps {
  label: string
  value: boolean
  setValue: (value: boolean) => void
}

const Toggle: React.FC<ToggleProps> = ({ label, value, setValue }) => {
  return (
    <Switch.Group as='div' className='flex items-center'>
      <Switch
        checked={value}
        onChange={setValue}
        className={clsx({
          'bg-orange-600': value,
          'bg-gray-400': !value,
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2':
            true,
        })}>
        <span
          aria-hidden='true'
          className={clsx({
            'translate-x-5': value,
            'translate-x-0': !value,
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out':
              true,
          })}
        />
      </Switch>
      <Switch.Label as='span' className='ml-3 text-lg'>
        <span className='font-medium text-gray-100'>{label}</span>
      </Switch.Label>
    </Switch.Group>
  )
}

export default Toggle
