import { icons } from './svg'

export default function TwIcon({ iconName }: { iconName: string }) {
  return <i>{icons[iconName]}</i>
}
