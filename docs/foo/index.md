---
title: Blogging Like a Hacker
lang: en-US
---

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

:tada: :100:


::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::


::: danger STOP
Danger zone, do not proceed
:::


```js
export default {
  name: 'MyComponent',
  // ...
}
```


```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

<span v-for="i in 3">{{ i }} </span>

{{ $page }}

::: v-pre
`{{ This will be displayed as-is }}`
:::



# Docs

This is a .md using a custom component

<CustomComponent />

## More docs

...

<script setup>
import CustomComponent from '../components/CustomComponent.vue'
</script>


