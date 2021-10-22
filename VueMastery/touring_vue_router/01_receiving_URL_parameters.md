Q) how do we read query parameters off the URL?

ex) http://example.com/events?page=4

- 접근 => `{{ $route.query.page }}`
- 컴포넌트 안에서 접근하려면 this 추가 => this.$route.query.~~

---

Q) what if you wanted the page to be part of the url?

```
const routes = [
  ...
  { path: '/events/:page', component: Events },
]
```

- 접근 : `{{ $route.params.page }}`

---

Q) route level configuration

- props object mode

```
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: { showExtra: true },
  },
```

```
<template>
  <div class="home">
    <h1>This is a home page</h1>
    <div v-if="showExtra">Extra stuff</div>
  </div>
</template>
<script>
export default {
  props: ["showExtra"]
};
</script>
```

---

Q) how to transform query parameters?
https://localhost:8080/?e=true
e 를 showExtra 로 변환하여 props 에 넣어주기

- props function mode

```
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: (route) => ({ showExtra: route.query.e }),
    // props: route => {
      return { showExtra: route.query.e, }
    }
  },
```
