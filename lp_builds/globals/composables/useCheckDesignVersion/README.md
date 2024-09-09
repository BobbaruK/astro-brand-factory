# useCheckDesignVersion()

| \*  | Params           | Type           | Default | Requiered |
| :-: | ---------------- | -------------- | :-----: | :-------: |
| 1.  | `componentProps` | ComponentProps |    -    |  &check;  |

### How to use

```javascript
import useCheckDesignVersion from "../../../../../../globals/composables/useCheckDesignVersion";

interface Props {
  componentProps: ComponentProps;
}
const { componentProps } = Astro.props;

useCheckDesignVersion(componentProps);
```
