//если квадрат ретурн площадь, если прямоугольник ретурн периметр.
const areaOrPerimeter = function (l, w) {
   if (l == w) {
      return l * w
   } else {
      return (l + w) * 2
   }
};