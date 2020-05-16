import sass from 'sass'

export const sassPlugin = {
  transforms: [
    {
      as: 'css',
      test(id) {
        // console.log(id)
        return id.endsWith('.sass')
      },
      transform(code) {
        // console.log(code)
        return sass
          .renderSync({
            data: code,
            indentedSyntax: true // only for .sass more see: https://sass-lang.com/documentation/js-api#file
          })
          .css.toString()
      }
    }
  ]
}
