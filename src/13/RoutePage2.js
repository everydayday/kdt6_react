import { useSearchParams } from "react-router-dom"
export default function RoutePage2() {
  // url로 오는 값 잡아준다
  const [params] = useSearchParams()

  console.log(params.get('item1'))
  console.log(params.get('item2'))
  return (
    <div>
      RoutePage2 : {params.get('item1')},{params.get('item2')}
    </div>
  )
}
