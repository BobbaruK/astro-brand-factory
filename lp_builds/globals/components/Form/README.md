# Form.astro

props:

1. lang (string)
2. id (string)
3. type: (string);

```javascript
// "classic" | "esma"
```

4. brand (number)

```javascript
// 1. Investing Tips 101
// 2. Traders Academic
// 3. Facoltà Di Trading
```

6. button: string;

## Basic Usage

```html
<Form
	lang="en"
	id="asd1"
	type="classic"
	brand={2}
	button="Learn More"
/>
```
