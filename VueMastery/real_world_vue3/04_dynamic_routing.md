router 에서 path 를 동적으로 설정하는 방법
주로 list page 에서 detail page 로 진입할 경우, path 에 id 를 가지고 가서 사용 (detail api 를 호출할 때 id 사용)

1. router 설정
  - router > index.js
  - path 에 : 를 사용해 받을 변수명으로 입력해준다.
  - props true 로 설정할 경우, component 로 진입할 때 바인딩된 변수명으로 props 로 사용할 수 있게 허용한다. 
```
const routes = [
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    component: EventDetails,
  },
]
```

2. component 진입 부분 설정
  - :바인딩
  - name 으로 호출할 path
  - params 로 넘길 변수들..
```
<router-link :to="{ name: 'EventDetails', params: { id: event.id } }">
```

3. component 로 진입 후 props 로 받아서 사용
```
export default {
  props: ['id'],
  data() {
    return {
      event: null,
    }
  },
  created() {
    // fetch event (by id) and set local data
    EventService.getEvent(this.id)
      .then((res) => {
        console.log('event:', res.data)
        this.event = res.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
```