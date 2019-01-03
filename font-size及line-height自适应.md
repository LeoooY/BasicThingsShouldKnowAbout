-Font-Size
  - px
    - 绝对像素大小
  - em
    - 可以缩放的字体大小
    - many developers use em instead of pixels.The em size unit is recommended by the W3C.
    - 计算公式 px/16 = em
  - em和%结合使用
```js
/*
  The solution that works in all  browsers, is to set a default    font-size in percent for the <body>    element:
*/
body {
  font-size: 100%;
}

h1 {
  font-size: 2.5em;
}

h2 {
  font-size: 1.875em;
}

p {
  font-size: 0.875em;
}
```
- 对于fontweight 如何结合em自适应
  - 直接设置为不带单位的值，lineHeight=字体大小*设置的值
```css
/* Unitless values: use this number multiplied
by the element's font size */
line-height: 3.5;
```
more:更多lineHeight可能的取值
```css
/* Keyword value */
line-height: normal;

/* <length> values */
line-height: 3em;

/* <percentage> values */
line-height: 34%;

/* Global values */
line-height: inherit;
line-height: initial;
line-height: unset;
```
关于em in lineHeight
```
参考StackOverflow链接
Assuming that “converting to ems” means using the em unit for font-size, then you should set line-height in a manner that also adapts to the font size. The two properties are closely related, and if you set one of them in em and the other (e.g.) in px or pt, then the page will break if the font size is changed. So it would work against the very idea of “using ems” to use essentially different units for essentially connected properties.

For example, if you set font-size: 1.5em and line-height: 18px, then things will depend on the font size of the element’s parent and may go very wrong if that size is much smaller or much larger than expected.

Whether you use the em unit or a pure number is a different issue. Using just a number, as in line-height: 1.2, is primarily equivalent to using the em unit, as in line-height: 1.2em. But there is the difference that when line-height is inherited, it is the pure number that gets inherited, not the computed value.

For example, if an inner element has twice the font size of its parent, then the inherited value 1.2 means that 1.2 times its own font size is used, which is OK. But if the parent had line-height: 1.2em, then the child would inherit a value that 1.2 times the parent’s font size – which is much smaller than its own font size.

```

参考:
- [CSS Fonts -W3C](https://www.w3schools.com/css/css_font.asp)
- [Line-height | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- [EM's for line-height | StackOverflow](https://stackoverflow.com/questions/15132671/ems-for-line-height)

