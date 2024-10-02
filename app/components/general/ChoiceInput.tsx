import { IconType } from 'react-icons'

interface ChoiceInputProps {
  text: string
  icon: IconType
  onClick: (value: string) => void
  selected?: boolean
}
const ChoiceInput: React.FC<ChoiceInputProps> = ({
  text,
  icon: Icon,
  onClick,
  selected,
}) => {
  return (
    <div
      onClick={() => onClick(text)}
      className={`py-2 px-4 my-3  cursor-pointer flex items-center rounded-md gap-2 justify-center h-16 border ${
        selected ? 'border-black' : 'border-gray-200'
      }`}
    >
      <Icon />
      <span className='text-slate-700'>{text}</span>
    </div>
  )
}
export default ChoiceInput
