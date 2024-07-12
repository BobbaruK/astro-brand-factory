# SCSSeco's Astro SVGMask

## How to use

| \*  | Prop          | Type   | Default | Requiered |
| :-: | ------------- | ------ | :-----: | :-------: |
| 1.  | `svg-encoded` | String |    -    |  &check;  |

1. Get the svg encoded **Ready for CSS** via https://yoksel.github.io/url-encoder/ <br> ex: url("...")

### Basic usage

```js
const svgImagePath = `url("data:image/svg+xml,%3Csvg width='73' height='77' viewBox='0 0 73 77' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.600098 32.2L12.9001 25.3L14.5001 26.2L3.9001 32.2L36.6001 50.6L69.4001 32.2L58.8001 26.2L60.4001 25.3L72.6001 32.2L36.6001 52.4L0.600098 32.2Z' fill='currentColor'/%3E%3Cpath d='M0.600098 44.2L12.9001 37.3L14.5001 38.2L3.9001 44.2L36.6001 62.6L69.4001 44.2L58.8001 38.2L60.4001 37.3L72.6001 44.2L36.6001 64.4L0.600098 44.2Z' fill='currentColor'/%3E%3Cpath d='M0.600098 56.1002L12.9001 49.2002L14.5001 50.1002L3.9001 56.1002L36.6001 74.5002L69.4001 56.1002L58.8001 50.1002L60.4001 49.2002L72.6001 56.1002L36.6001 76.3002L0.600098 56.1002Z' fill='currentColor'/%3E%3Cpath d='M0.600098 20.3001L36.6001 0.100098L72.6001 20.3001L36.6001 40.5001L0.600098 20.3001ZM3.9001 20.3001L36.7001 38.7001L69.5001 20.3001L36.7001 1.9001C36.6001 1.8001 3.9001 20.3001 3.9001 20.3001Z' fill='currentColor'/%3E%3C/svg%3E%0A")`;
```

```html
<SVGMask url="{svgImagePath}" />
```

### Caveats

Not working with multicolor svg's. Best use for icons and stuff like that