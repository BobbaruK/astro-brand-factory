# useBrandFactory()

| \*  | Params         | Type | Default | Requiered |
| :-: | -------------- | ---- | :-----: | :-------: |
| 1.  | `BrandFactory` | obj  |    -    |  &check;  |

### How to use

```javascript
const componentProps: ComponentProps<
  TradingProfilerSVGVariation,
  CustomOptions
> = {
  lang: "en",
  langType: langTypeRegion,
  dir: "ltr",
  lpName: "Cometolearn",
  brandObj: useBrandFactory({
    brand: "tradingprofiler",
    region: langTypeRegion,
    whatsapp: false,
  }),
  logo: function () {
    return this.brandObj.images.logoSVG.default;
  },
  lpType: "classic",
  formValidation: "classic",
  designVersion: "v1",
  customOptions: {
    logoSquare: false,
  },
};
```
