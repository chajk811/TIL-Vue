==> 에러
    처음 event 가 null 인 상태에서 dom 을 그릴 때, .으로 접근하려 할때 에러
```
<template>
  <div>
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'

export default {
  data() {
    return {
      event: null,
      id: 123,
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
</script>
```

==> 해결1
    event 의 데이터를 그려야하는 큰 태그를 v-if 로 감싸 데이터가 들어왔을 때 그리도록 한다.
```
<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'

export default {
  data() {
    return {
      event: null,
      id: 123,
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
</script>
```

==> 해결2
    event 를 풀어서 data 에 선언해준다.
```
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ time }} on {{ date }} @ {{ location }}</p>
    <p>{{ description }}</p>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'

export default {
  data() {
    return {
      event: null,
      title: '',
      time: '',
      date: '',
      location: '',
      description: '',
      id: 123,
    }
  },
  created() {
    // fetch event (by id) and set local data
    EventService.getEvent(this.id)
      .then((res) => {
        console.log('event:', res.data)
        const event = res.data
        this.event = event
        this.title = event.title
        this.time = event.time
        this.date = event.date
        this.location = event.location
        this.discription = event.description

      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>
```