import { parseISO, format } from 'date-fns'

interface DateProps {
  dateString: string
  formatStyle: string | any
}

export const Date: React.FC<DateProps> = ({ dateString, formatStyle }) => {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString} className="text-sm text-fore-subtle">
      {format(date, formatStyle)}
    </time>
  )
}
export default Date
