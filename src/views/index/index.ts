import indexMarko from './index.marko'

export default (req, res) => {
  res.marko(indexMarko, { foo: 'foo' })
}
