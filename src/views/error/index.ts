import errorMarko from './error.marko'

export default (req, res) => {
  res.marko(errorMarko, {})
}
